import db from "../database/mongodb.js";

export async function getProducts(req, res) {
    const products = await db.collection("products").find().toArray();

    res.status(200).json(products);
}

export async function postProduct(req, res) {
    const newProduct = req.body;

    await db.collection("products").insertOne(newProduct);

    res.sendStatus(201);
}

export async function getProductById(req, res) {
    const { id } = req.params;

    const product = await db.collection("products").findOne({ id });

    if (!product) {
        return res.sendStatus(404);
    }

    res.status(200).json(product);
}
