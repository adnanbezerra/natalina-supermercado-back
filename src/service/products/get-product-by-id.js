import { Image } from "../../models/image/index.js";
import Product from "../../models/product/index.js";

export async function getProductById(id) {
    const product = await Product.findById(id);

    if (!product) {
        return res.sendStatus(404);
    }

    const image = await Image.findById(product.image);

    if (!image) {
        return res.status(404).send("Imagem não encontrada");
    }

    const base64Image = image.img.data.toString("base64");

    const responseJson = {
        ...product,
        image: { contentType: image.img.contentType, data: base64Image },
    };

    return responseJson;
}
