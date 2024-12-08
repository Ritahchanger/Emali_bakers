const Product = require("../models/Product.model");
const admin = require("firebase-admin");
const bucket = admin.storage().bucket();
const generateUniqueName = require("../service/generateUniqueName");

const createProduct = async (req, res, next) => {
    try {
        const { productName, description, price, quantity, category } = req.body;

        const images = req.files;

        console.log(images)

        const existingProduct = await Product.findOne({ productName: productName.toLowerCase() });

        if (existingProduct) {

            return res.status(409).json({ success: false, message: "Product already exists" });
        }

        const folder = "products/";

        const uploadFilePromises = images.map(async (image) => {

            const fileName = generateUniqueName(image.originalname);

            const fileRef = bucket.file(`${folder}${fileName}`);

            await fileRef.save(image.buffer

            );

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



const getProducts = async (req,res,next) =>{

    try{

        const products = await Product.find({})

        if(!products){

            return res.status(200).json({status:404,success:false,message:'Products not found'})

        }

        res.status(200).json({status:200,success:true,data:products});


    }catch(error){

        next(error)

    }

}


const deleteProduct = async (req,res,next) =>{

    try{

        const { productId } = req.params;

        const product = await Product.findById(productId)

        if(!product){

            return res.status(200).json({status:404,success:false,message:"Product not found"})

        }

        const deleteFilePromises = product.images.map(async(image)=>{

            const fileRef = bucket.file(`products/${image.fileName}`);

            const [exists] = await fileRef.exists();

            if(exists){

                await fileRef.delete();

            }

        });

        await Promise.all(deleteFilePromises);

        await Product.findByIdAndDelete(productId);

        return res.status(200).json({success:true,message:"Product and it's associated files deleted successfully"})


    }catch(error){
        next(error)
    }

}


const getProductById = async (req,res,next) =>{

    try{

        const { id } = req.params;

        const product = await Product.findById(id);

        if(!product){

            return res.status(200).json({status:404,success:false,message:"The product not found"});

        }else{

            return res.status(200).json({status:200,success:true,product})

        }

    }catch(error){

        next(error)

    }
}

const editProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const { productName, description, price, quantity, category } = req.body;
        const newImages = req.files; // Images uploaded during the request
        const imagesToDelete = req.body.deleteImages || []; // Array of image filenames to delete

        // Find the product by ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Update product details
        if (productName) product.productName = productName.toLowerCase();
        if (description) product.description = description;
        if (price) product.price = price;
        if (quantity) product.quantity = quantity;
        if (category) product.category = category;

        // Manage existing images if there are new ones provided
        if (newImages && newImages.length > 0) {
            const folder = "products/";

            // Delete specified images (those added during the creation)
            if (imagesToDelete.length > 0) {
                const deleteFilePromises = product.images
                    .filter(image => imagesToDelete.includes(image.fileName)) // Filter the images to delete
                    .map(async (image) => {
                        const fileRef = bucket.file(`${folder}${image.fileName}`);
                        const [exists] = await fileRef.exists();
                        if (exists) await fileRef.delete();
                    });
                await Promise.all(deleteFilePromises);

                // Remove the deleted images from the product's images array
                product.images = product.images.filter(image => !imagesToDelete.includes(image.fileName));
            }

            // Upload new images
            const uploadFilePromises = newImages.map(async (image) => {
                const fileName = generateUniqueName(image.originalname);
                const fileRef = bucket.file(`${folder}${fileName}`);

                await fileRef.save(image.buffer);

                const [downloadUrl] = await fileRef.getSignedUrl({
                    action: "read",
                    expires: Date.now() + 3600000, // 1-hour signed URL
                });

                return { downloadUrl, fileName };
            });

            const uploadedImages = await Promise.all(uploadFilePromises);

            // Append the new images to the product's images array
            product.images = [...product.images, ...uploadedImages];
        }

        // Save the updated product
        const updatedProduct = await product.save();

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (error) {

        next(error);


    }
};


module.exports = { createProduct,getProductById,getProducts,deleteProduct,editProduct};
