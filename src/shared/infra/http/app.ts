import "reflect-metadata";
import "dotenv/config";
import "../container";
import express from "express";
import cors from "cors";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import { ExpressAdapter } from "@bull-board/express";
import routes from "./routes";
import { SendWelcomeEmail } from "../../../jobs/SendWelcomeEmail";

const sendWelcomeEmailQueue = new SendWelcomeEmail();
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");
createBullBoard({
  queues: [new BullAdapter(sendWelcomeEmailQueue.queue)],
  serverAdapter,
});

sendWelcomeEmailQueue.process();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.use("/admin/queues", serverAdapter.getRouter());

export { app };
