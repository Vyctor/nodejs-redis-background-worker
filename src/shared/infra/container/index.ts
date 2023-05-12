import { container } from "tsyringe";
import "./providers";
import { UserRepository } from "../../../modules/users/repositories/UserRepository";
import { UserRepositoryDatabase } from "../../../modules/users/repositories/UserRepositoryDatabase";

container.registerSingleton<UserRepository>(
  "UserRepositoryDatabase",
  UserRepositoryDatabase
);
