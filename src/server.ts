import express from "express";
import config from "./config/config.json";
import Logger from "./util/Logger";
import cors from "cors";
import Imports from "./imports";

const app = express();
const port = process.env.PORT || config.port;
app.use(cors());

app.use(Imports);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = app.listen(port, () => {
  Logger.INFO(`Maverick running on port [${port}]`);
});
