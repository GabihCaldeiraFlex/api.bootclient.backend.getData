import { Express } from "express";
import { handleErrorMiddleware } from "../error";
import MaisFreteRoutes from "./MaisFrete.routes";

const appRoutes = (app: Express) => {
  app.use("/maisFrete", MaisFreteRoutes());

  app.use(handleErrorMiddleware);
};

export default appRoutes;
