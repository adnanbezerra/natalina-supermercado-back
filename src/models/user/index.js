import { mongoConnection } from "../../database/mongodb.js";

const userSchema = new mongoConnection.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

export const User = mongoConnection.model("User", userSchema);
