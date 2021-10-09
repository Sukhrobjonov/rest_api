export default function NotFoundMiddleware(req, res, next) {
    res.status(404).json({
        ok: false,
        message: "Not found",
    });
}
