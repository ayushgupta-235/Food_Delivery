import mongoose from "mongoose";
export const connectDB=async()=>{
   await mongoose.connect('mongodb+srv://greatstack:shresth@cluster0.ke7guyr.mongodb.net/food-del').
   then(()=>console.log("DB connected"))
}