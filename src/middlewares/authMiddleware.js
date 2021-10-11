import sessions from "../models/SessionModel.js";
import { checkToken } from "../modules/jwt.js";

export default function AuthMiddleware(req, res, next) {
    try {
        if (!req.headers["authorization"]) {
            throw new Error("Token is not defined", 403);
        }

        const data = checkToken(req.headers["authorization"]);

        console.log(data);
    } catch (error) {
        next(error);
    }
}
