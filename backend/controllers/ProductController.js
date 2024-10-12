const Product = require("../models/Product.model");
const admin = require("firebase-admin");
const bucket = admin.storage().bucket();
const generateUniqueName = require("../service/generateUniqueName");

const createProduct = async (req, res, next) => {
    try {
        const { productName, description, price, quantity, category } = req.body;

        const images = req.images;

        const existingProduct = await Product.findOne({ productName: productName.toLowerCase() });

        if (existingProduct) {

            return res.status(409).json({ success: false, message: "Product already exists" });
        }

        const folder = "products/";

        const uploadFilePromises = images.map(async (image) => {

            const fileName = generateUniqueName(image.originalname);

            const fileRef = bucket.file(`${folder}${fileName}`);

            await fileRef.save(image.buffer, {

                metadata: {

                    contentType: image.mimetype,

                },

            });

            const [downloadUrl] = await fileRef.getSignedUrl({

                action: "read",

                expires: Date.now() + 3600000,

            });

            return { downloadUrl, fileName };
        });

        const uploadedImages = await Promise.all(uploadFilePromises);

        const newProduct = new Product({

            productName: productName.toLowerCase(),

            description,

            price,

            quantity,

            category,

            images: uploadedImages,
        });

        const savedProduct = await newProduct.save();

        return res.status(201).json({ success: true, message: "Product created successfully", data: savedProduct });

    } catch (error) {

        next(error);

    }
};

module.exports = {

    createProduct,

};


module.exports = { createProduct }