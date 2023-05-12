export type UserProps = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export class User {
  private _id?: string;
  private _name: string;
  private _email: string;
  private _password: string;

  private constructor(private props: UserProps) {
    Object.assign(this, props);
  }

  public static create(props: UserProps): User {
    return new User(props);
  }

  public get name(): string {
    return this.props.name;
  }

  public get email(): string {
    return this.props.email;
  }

  public get password(): string {
    return this.props.password;
  }
}
