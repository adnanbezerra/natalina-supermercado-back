import { User } from "../../models/user/index.js";

export async function editUser(userId, userData) {
    try {
        const user = await User.findByIdAndUpdate(userId, userData, { new: true });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        return user;
    } catch (error) {
        console.error("Erro ao editar usuário:", error);
        throw error;
    }
}