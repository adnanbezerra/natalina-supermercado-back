import db from "../database/mongodb.js";

export async function getProducts(req, res) {
    const products = await db.collection("products").find().toArray();

    return products;
}
