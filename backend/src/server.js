const PORT = process.env.PORT || 8000

const app = require("./app");


app.listen(PORT,()=>{

    console.log(`There server is successfully running on PORT ${PORT}`)

})