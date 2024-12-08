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

module.exports = { createProduct,getProductById,getProducts,deleteProduct};
