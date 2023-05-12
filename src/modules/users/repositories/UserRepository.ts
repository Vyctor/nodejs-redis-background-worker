import { UserProps } from "../entities/User";

export interface UserRepository {
  create(input: UserProps): Promise<void>;
}
