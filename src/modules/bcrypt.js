import { hash, genSalt, compare } from "bcrypt";

export default function genCrypt(password) {
    const salt = await genSalt(10);
    return await hash(data, salt);
}

export default function compareHash(hash,password) {
    return await compare(password, hash);
}
