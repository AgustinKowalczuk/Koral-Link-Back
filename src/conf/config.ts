import { config } from "dotenv";
config();

export const {
  PORT = 3000,
  URI_MONGODB_DEVELOP = "mongodb://localhost:27017",
} = process.env;
