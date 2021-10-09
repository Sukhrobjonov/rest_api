import { Router } from "express";
import UserRouteController from "../controllers/UserRouteController.js";

const UserRoute = Router();

UserRoute.get("/", UserRouteController.UserRouteGetController);
UserRoute.post("/");

export default UserRoute;
