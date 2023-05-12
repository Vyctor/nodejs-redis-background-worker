import "dotenv/config";

const RedisConfig = {
  url:
    (process.env.MAIL_HOST as string) +
    ":" +
    parseInt(process.env.MAIL_PORT as string, 10),
};

export { RedisConfig };
