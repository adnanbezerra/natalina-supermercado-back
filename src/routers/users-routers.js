import { Router } from "express";
import { cadastroUser } from "../controllers/user/cadastro-user-controller.js";
import { deleteUserController } from "../controllers/user/delete-user-controller.js";
import { editUserController } from "../controllers/user/edit-user-controller.js";
import { loginUserController } from "../controllers/user/login-user-controller.js";

export const UsersRouter = Router();

UsersRouter.post("/user/register", cadastroUser);
UsersRouter.delete("/user/:id", deleteUserController);
UsersRouter.put("/user/:id", editUserController);
UsersRouter.post("/user/login", loginUserController);