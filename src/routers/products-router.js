import { Router } from "express";
import {
    getProducts,
    postProduct,
} from "../controllers/products-controller.js";
import { validateSchema } from "../middlewares/validate-joi-schema.js";
import { NewProductSchema } from "../schemas/new-product.js";

export const ProductsRouter = Router();

ProductsRouter.get("/products", getProducts);
ProductsRouter.post("/products", validateSchema(NewProductSchema), postProduct);
