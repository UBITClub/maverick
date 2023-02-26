import Version from "./api/Version/Base";
import express from "express";

const app = express.Router();

app.use([
  Version
]);

export = app;
