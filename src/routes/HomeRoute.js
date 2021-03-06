import { Router } from "express";
import HomeRouteController from "../controllers/HomeRouteController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const HomeRoute = Router();

HomeRoute.get("/", AuthMiddleware, HomeRouteController.HomeRouteGetController);

export default HomeRoute;
