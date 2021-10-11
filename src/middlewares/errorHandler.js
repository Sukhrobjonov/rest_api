import { ErrorHandler, handleError } from "../helpers/errorHandler.js";

export function addErrorHandler(req, res, next) {
    res.error = ErrorHandler;
    next();
}

export function handleErrorCheck(error, req, res, next) {
    handleError(error, res);
}
