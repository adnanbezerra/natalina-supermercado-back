import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import db from "../database/mongodb.js";
dotenv.config();

export async function validatingToken(req, res, next) {
    try {
        const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "");
        if (!token) {
            return res.sendStatus(401);
        }
        const data = jwt.verify(token, process.env.JWT_SECRET);
        if (data) {
            const userId = await db.collection("users").findOne({ userId });

            if (!userId) {
                return res.sendStatus(404);
            }

            res.locals.userId = userId;

            next();
        } else {
            return res.status(401).send("Erro ao validar o usuário");
        }
    } catch (error) {
        return res.sendStatus(500);
    }
}
