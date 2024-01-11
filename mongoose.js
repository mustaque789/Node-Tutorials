// schema : define data types
// model : connect mongoose's collection via schema


// schema : validates data type
//model : 

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/e-comm');

const productSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        brand:String,
        category:String
    }
);

const main = async ()=>{
    const Product = mongoose.model('products',productSchema);

    let data = new Product(
        {
            name:"Redmi",
            price:500,
            brand:"Xiomi",
            category:"mobile"
        }
    )

    const result = await data.save();
    console.log(result)
}
main(); 
// mongoose GET