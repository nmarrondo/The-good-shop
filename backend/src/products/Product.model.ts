import { model, Schema, Document } from "mongoose";

export interface ProductDocument extends Document {
  
  // producer: string; // name of the producer who uploaded it
  name: string; // name of the product
  description?: string; // description of the product, generate an automatic if it has not been filled
  expiration: string; // date?
  quantity: string; // quantity of product
  price: string; // price for kg
  buyer: string[]; // who bought

}

const schema = new Schema ({

  // producer: { type:String, required:true },
  name: { type:String, required:true },
  description: { type:String },
  expiration: { type:String, required:true },
  quantity: { type:String, required:true },
  price: { type:String, required:true },
  buyer: [{ type:String }],

}, {timestamps: true})

export const ProductModel = model<ProductDocument>("product", schema)

// really I dont need make difference between products/stock, 
// each upload is going to become a closed package becausue 
// it ll be diferenced by their produccer name, and expiration date, 
// if a producer upload a new product with this same values, 
// I can refresh the quantity, and the same if a client buy it.

// ** misconception -> to do