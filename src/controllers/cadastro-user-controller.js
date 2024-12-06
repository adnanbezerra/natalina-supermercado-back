import { createUser } from "../service/user/create-user.js";

export async function cadastroUser(req, res) {
    try {
        const user = await createUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}