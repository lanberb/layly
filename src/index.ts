import express from "express";
import { PORT_NUMBER } from "./config/app.config";
import { emotionalMusic } from "./feature";

const app = express();
const port: number = PORT_NUMBER || 8080;

const handleListenServer: VoidFunction = () => {
  console.log(`server listening on port ${port}`);
};

app.listen(port, handleListenServer);
app.get("/feelingMusic/", emotionalMusic);
