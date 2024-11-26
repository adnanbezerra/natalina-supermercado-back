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
