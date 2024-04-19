import mongoose, { Document, Schema } from "mongoose"

interface ICartProduct extends Document{
    productID : mongoose.Types.ObjectId,
    quantity : number;
}

const CartProductSchema : Schema = new Schema({
    productID : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Product"
    },
    quantity : {
        type : Number,
        require : true,
        min : 1
    }
});

interface ICart extends Document{
    products : ICartProduct[]
}

const CartSchema : Schema = new Schema({
    products : {
        type : [CartProductSchema],
        require : true,
    }
}, {
    timestamps : true,
    versionKey : false
})

export const CartModel = mongoose.model<ICart>("Cart", CartSchema)