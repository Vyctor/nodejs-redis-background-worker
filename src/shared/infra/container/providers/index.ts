import { container } from "tsyringe";
import { MailService } from "./Mail/MailService";
import { NodemailerMailService } from "./Mail/NodemailerMailService";

container.registerSingleton<MailService>(
  "NodemailerMailService",
  NodemailerMailService
);
