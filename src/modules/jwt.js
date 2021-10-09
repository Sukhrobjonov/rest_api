import jwt from "jsonwebtoken";
const { sign, verify } = jwt;

export function createToken(token) {
    return sign(token, process.env.SECRET_KEY);
}

export function checkToken(token) {
    try {
        return verify(token, process.env.SECRET_KEY);
    } catch (error) {
        console.log(error);
        return false;
    }
}
