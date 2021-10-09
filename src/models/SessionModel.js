import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const SessionSchema = new Schema(
    {
        owner_id: {
            type: Types.ObjectId,
            ref: "users",
            required: true,
        },
        session: {
            type: String,
            required: true,
            max: 100,
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const sessions = new model("sessions", SessionSchema);
export default sessions;
