import { config } from "dotenv";
config();

export const {
  PORT = 3000,
  URI_MONGODB_DEVELOP = "mongodb://localhost:27017",
  URI_MONGODB_PRODUCTION = URI_MONGODB_DEVELOP,
} = process.env;
