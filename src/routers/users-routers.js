import { Router } from "express";
import { cadastroUser } from "../controllers/cadastro-user-controller.js";
import { deleteUserController } from "../controllers/delete-user-controller.js";
import { editUserController } from "../controllers/edit-user-controller.js";
import { loginUserController } from "../controllers/login-user-controller.js";

export const UsersRouter = Router();

UsersRouter.post("/user/register", cadastroUser);
UsersRouter.delete("/user/:id", deleteUserController);
UsersRouter.put("/user/:id", editUserController);
UsersRouter.post("/user/login", loginUserController);