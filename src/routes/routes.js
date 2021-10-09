import NotFoundMiddleware from "../middlewares/notFoundMiddleware.js";
import { handleErrorCheck } from "../modules/errorHandler.js";
import HomeRoute from "./HomeRoute.js";

export default function routes(app) {
    try {
        app.use("/", HomeRoute);
    } finally {
        app.use(handleErrorCheck);
        app.use(NotFoundMiddleware);
    }
}
