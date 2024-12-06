import { loginUser } from "../service/user/login-user.js";

export async function loginUserController(req, res) {
    const { email, password } = req.body;

    try {
        const { user, token } = await loginUser(email, password);
        res.status(200).json({ message: "Login bem-sucedido", user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}