export default class HomeRouteController {
    static async HomeRouteGetController(req, res, next) {
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
