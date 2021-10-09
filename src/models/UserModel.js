import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            min: 2,
            max: 32,
            required: true,
        },
        username: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
            min: 5,
            max: 16,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["admin", "superadmin", "user"],
            required: true,
            default: "user",
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const users = new model("users", UserSchema);

export default users;
