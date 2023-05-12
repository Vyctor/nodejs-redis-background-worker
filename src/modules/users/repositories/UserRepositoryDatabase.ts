import pgPromise from "pg-promise";
import { UserProps } from "../entities/User";
import { UserRepository } from "./UserRepository";
import { injectable } from "tsyringe";

@injectable()
export class UserRepositoryDatabase implements UserRepository {
  async create(input: UserProps): Promise<void> {
    const connection = pgPromise()(process.env.DATABASE_URL);

    await connection.query(
      "INSERT INTO app.users (name, email, password) VALUES ($1, $2, $3)",
      [input.name, input.email, input.password]
    );

    await connection.$pool.end();
  }
}
