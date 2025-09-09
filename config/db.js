import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://satyaprakashnayak741:lLRmsKle4Ee1UAZL@cluster0.wxmecsh.mongodb.net/food-del').then(()=>console.log("DB connected"));
}