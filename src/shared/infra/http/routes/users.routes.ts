import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/usecases/CreateUser/create-user.controller";

const usersRouter = Router();
const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.handle);
usersRouter.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

export { usersRouter };
