import { Router } from "express";
import getInfoController from "../Controllers/MaisFrete/index.controller";

const router = Router();

const MaisFreteRoutes = () => {
  router.get("/info", getInfoController);

  return router;
};

export default MaisFreteRoutes;
