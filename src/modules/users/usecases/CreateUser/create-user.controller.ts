import { Request, Response } from "express";
import { CreateUserUsecase } from "./create-user.usecase";
import { container, injectable } from "tsyringe";

export class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createUserUsecase = container.resolve(CreateUserUsecase);

    try {
      await createUserUsecase.execute({ name, email });
      return response.status(201).send();
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
