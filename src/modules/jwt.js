import { sign, verify } from "jsonwebtoken";

export default function createToken(token) {
    return sign(token, process.env.SECRET_KEY);
}


export default function checkToken(token) {
    try {
        return verify(token, process.env.SECRET_KEY);
    } catch (error) {
        console.log(error);
        return false;
    }
}
