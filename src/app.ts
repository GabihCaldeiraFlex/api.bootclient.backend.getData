import express from "express";
import "reflect-metadata";
import "express-async-errors";
import appRoutes from "./Routes";

const app = express();

app.use(express.json());
appRoutes(app);

app.listen(3001, () => {
  console.log("Servidor Executando");
});

export default app;
