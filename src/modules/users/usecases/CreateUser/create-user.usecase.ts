import { inject, injectable } from "tsyringe";

import { UserRepository } from "../../repositories/UserRepository";
import { SendWelcomeEmail } from "../../../../jobs/SendWelcomeEmail";

@injectable()
export class CreateUserUsecase {
  constructor(
    @inject("UserRepositoryDatabase")
    private readonly userRepository: UserRepository
  ) {}

  public async execute(input: { name: string; email: string }): Promise<void> {
    const { name, email } = input;

    const randomString = Math.random().toString(36).substring(2, 15);

    const user = {
      name,
      email,
      password: randomString,
    };

    await Promise.all([
      this.userRepository.create(user),
      new SendWelcomeEmail().add("RegistrationMail", { user }),
    ]);
  }
}
