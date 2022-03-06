import express from "express";
import { PORT_NUMBER } from "./config/app.config";
import { emotionalMusic } from "./feature";

const app = express();
const port: number = PORT_NUMBER || 8080;

const handleListenServer: VoidFunction = () => {
  console.log(`server listening on port ${port}`);
};
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(port, handleListenServer);
app.get("/emotionalMusic/", (req: express.Request, res: express.Response) =>
  emotionalMusic(req, res)
);
