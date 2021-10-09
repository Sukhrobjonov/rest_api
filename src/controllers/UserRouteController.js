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

    static async UserRoutePostController(req, res, next) {
        try {
            res.status(200).json({
                ok: true,
                message: "OK",
            });
        } catch (error) {
            next(error);
        }
    }
}
