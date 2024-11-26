import { Router } from "express";
import {
    getProductById,
    getProducts,
    postProduct,
} from "../controllers/products-controller.js";
import { validateSchema } from "../middlewares/validate-joi-schema.js";
import { NewProductSchema } from "../schemas/new-product.js";

export const ProductsRouter = Router();

ProductsRouter.get("/products", getProducts);
ProductsRouter.post("/product", validateSchema(NewProductSchema), postProduct);
ProductsRouter.get("/product/:id", getProductById);
