import { app } from "./app";
const { APP_PORT } = process.env;

app.listen(APP_PORT, () => console.log(`Server listening on port ${APP_PORT}`));
