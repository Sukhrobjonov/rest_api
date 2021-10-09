import sessions from "../models/SessionModel.js";
import users from "../models/UserModel.js";
import { genCrypt, compareHash } from "../modules/bcrypt.js";
import { createToken } from "../modules/jwt.js";
import Validations from "../modules/validations.js";

export default class UserRouteController {
    static async UserRouteGetController(req, res, next) {
        try {
            res.status(200).json({
                ok: true,
                message: "OK",
            });
        } catch (error) {
            next(error);
        }
    }

    static async UserRouteRegPostController(req, res, next) {
        try {
            const { name, username, password } =
                await Validations.RegValidation(req.body);

            const user = await users.create({
                name,
                username,
                password: await genCrypt(password),
            });

            const session = await sessions.create({
                owner_id: user._id,
                session: req.headers["user-agent"],
            });

            const token = createToken({
                session_id: session._id,
            });

            res.status(200).json({
                ok: true,
                message: "User created successfully",
                data: {
                    token,
                },
            });
        } catch (error) {
            if (error.name === "MongoServerError" && error.code === 11000) {
                next(new Error("Username must be unique"));
                return;
            }
            next(error);
        }
    }
    static async UserRouteLoginPostController(req, res, next) {
        try {
            const { username, password } = await Validations.LoginValidation(
                req.body
            );

            const user = await users.findOne({
                username: username,
            });

            const isTrust = await compareHash(user.password, password);

            // const session = await sessions.create({
            //     owner_id: user._id,
            //     session: req.headers["user-agent"],
            // });

            // const token = createToken({
            //     session_id: session._id,
            // });

            res.status(200).json({
                ok: true,
                message: "User logined successfully",
                // data: {
                //     token,
                // },
            });
        } catch (error) {
            next(error);
        }
    }
}
