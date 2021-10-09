import NotFoundMiddleware from "../middlewares/notFoundMiddleware.js";
import { handleErrorCheck } from "../modules/errorHandler.js";

export default function routes(app) {
    try {
        //
    } finally {
        app.use(handleErrorCheck);
        app.use(NotFoundMiddleware);
    }
}
