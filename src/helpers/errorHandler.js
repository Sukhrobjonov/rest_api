export class ErrorHandler extends Error {
    constructor(code, message) {
        super();
        this.code = code;
        this.message = message;
    }
}

export function handleError(error, res) {
    const { code, message } = error;

    res.status(code || 400).json({
        ok: false,
        message,
    });
}
