import { Router } from "express";
import { getProducts } from "../controllers/products-controller.js";

export const ProductsRouter = Router();

ProductsRouter.get("/products", async (req, res) => {
    const products = await getProducts(req, res);

    res.status(200).json(products);
});
