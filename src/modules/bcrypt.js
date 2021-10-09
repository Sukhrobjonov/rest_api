import { hash, genSalt, compare } from "bcrypt";

export async function genCrypt(password) {
    const salt = await genSalt(10);
    return await hash(password, salt);
}

export async function compareHash(hash, password) {
    return await compare(password, hash);
}
