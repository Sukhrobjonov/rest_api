import { Router } from "express";
import UserRouteController from "../controllers/UserRouteController.js";

const UserRoute = Router();

UserRoute.get("/", UserRouteController.UserRouteGetController);
UserRoute.post("/registration", UserRouteController.UserRouteRegPostController);
UserRoute.post("/login", UserRouteController.UserRouteLoginPostController);

export default UserRoute;
