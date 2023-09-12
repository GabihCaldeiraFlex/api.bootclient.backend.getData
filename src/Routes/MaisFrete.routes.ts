import { Router } from "express";

const router = Router();

const MaisFreteRoutes = () => {
  router.get("/trips");
  router.get("/vehicles");
  router.get("/owners");
  router.get("/drivers");

  return Router;
};

export default MaisFreteRoutes;
