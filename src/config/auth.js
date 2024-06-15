import { configDotenv } from "dotenv";
configDotenv();

export default {
  secret: process.env.AUTH_SECRET,
  expiresIn: process.env.AUTH_EXPIRESIN,
};
