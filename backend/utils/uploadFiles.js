const multer = require("multer");

const upload = multer({
    storage:memoryStorage()
})






const uploadSingle = upload.single("file");


const uploadMany = upload.array("images",30);




module.exports = { uploadSingle, uploadMany }