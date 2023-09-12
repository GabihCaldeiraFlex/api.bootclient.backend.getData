import { Express } from "express";
import { handleErrorMiddleware } from "../error";
import MaisFreteRoutes from "./MaisFrete.routes";

const appRoutes = (app: Express) => {
  app.use("", MaisFreteRoutes());

  app.use(handleErrorMiddleware);
};

export default appRoutes;
