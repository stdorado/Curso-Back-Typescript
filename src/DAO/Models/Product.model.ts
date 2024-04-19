import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"


const ProductSchema : Schema = new  mongoose.Schema({
    title :{
          type : String,
          require : true
    },

    thumbnail: {
        type : String,
        require : true
    },

    description : {
        type : String,
        require : true
    },

    code : {
        type : String,
        unique : true,
        require : true
    },

    stock : {
        type : Number,
        require : true,
        min : 0,
    },

    price : {
        type : Number,
        require : true,
        min : 0
    },
    status : {
        type : Boolean,
        require : true
    },

    category : {
        type : String,
        require : true,
        enum : ["Electronicos", "Ropa" , "Hogar", "Comida"]
    }
})

ProductSchema.plugin(mongoosePaginate)

export const Product = mongoose.model("Product", ProductSchema);