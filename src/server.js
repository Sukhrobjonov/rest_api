import express from "express";
import path from "path";
import morgan from "morgan";
import database from "./modules/mongoose.js";
import routes from "./routes/routes.js";
const PORT = process.env.PORT || 8070;
const __dirname = path.resolve();

async function server(mode) {
    const app = express();

    try {
        app.listen(PORT, () =>
            console.log(`Server has been started at ${PORT} port`)
        );

        // Middlewares

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use("/public", express.static(path.join(__dirname, "public")));

        if (mode == "dev") app.use(morgan("dev"));

        await database();
    } catch (error) {
        console.log("SERVER ERROR:", error + "");
    } finally {
        routes(app);
    }
}

export default server;
