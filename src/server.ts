//imports
import express, { Response, Request, NextFunction } from "express";
import {
  PORT,
  URI_MONGODB_DEVELOP,
  URI_MONGODB_PRODUCTION,
} from "./conf/config";
import { ConnectionDB } from "./db/connection";
import morgan from "morgan";
import cors from "cors";

const server = express();

//setting
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Connection with DB
// ConnectionDB(URI_MONGODB_DEVELOP); //Develop == Local
ConnectionDB(URI_MONGODB_PRODUCTION); //Production == Atlas / cloud

//Method not implemented
server.get("*/", (req: Request, res: Response) => {
  res.send("<h1>404 | Page not Found</h1>");
});

//listener
server.listen(PORT, () => {
  console.log({
    status: "On",
    msg: `Server on port ${PORT}`,
    link: `http://localhost:${PORT}/`,
  });
});
