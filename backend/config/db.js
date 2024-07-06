import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://rookreturns:dolly1167@cluster0.iy4ilwg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


