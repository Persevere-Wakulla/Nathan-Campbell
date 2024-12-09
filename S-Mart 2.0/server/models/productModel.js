import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id:Number,
    title:String,
    description: String,
    category:String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
})