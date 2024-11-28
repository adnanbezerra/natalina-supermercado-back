import { Router } from "express";
import {
    getProductById,
    getProducts,
    postProduct,
} from "../controllers/products-controller.js";
import multer from "multer";

export const ProductsRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

ProductsRouter.get("/product", getProducts);
ProductsRouter.post("/product", upload.single("image"), postProduct);
ProductsRouter.get("/product/:id", getProductById);
