import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import db from "../database/mongodb.js";

dotenv.config();

export async function validatingToken(req, res, next) {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).send("Token não fornecido.");
        }

        const token = authorization.replace("Bearer ", "");
        if (!token) {
            return res.status(401).send("Token inválido ou ausente.");
        }

        // Verifica o token JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded.id) {
            return res.status(401).send("Token inválido.");
        }

        // Busca o usuário no banco de dados
        const user = await db.collection("users").findOne({ _id: decoded.id });
        if (!user) {
            return res.status(404).send("Usuário não encontrado.");
        }

        // Armazena o usuário na requisição para os próximos middlewares
        res.locals.user = user;

        next(); // Continua o fluxo
    } catch (error) {
        console.error("Erro na validação do token:", error);
        return res.status(500).send("Erro interno no servidor.");
    }
}