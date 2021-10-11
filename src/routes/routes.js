import NotFoundMiddleware from "../middlewares/notFoundMiddleware.js";
import { handleErrorCheck } from "../middlewares/errorHandler.js";
import HomeRoute from "./HomeRoute.js";
import UserRoute from "./UserRoute.js";

export default function routes(app) {
    try {
        app.use("/", HomeRoute);
        app.use("/users", UserRoute);
    } finally {
        app.use(handleErrorCheck);
        app.use(NotFoundMiddleware);
    }
}
