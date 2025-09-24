import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const pass=process.env.password;
const URL=`mongodb+srv://abhishekjnvkumar_db_user:${pass}@cluster0.3jsow9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const  connection = async () =>{
    try{
         await mongoose.connect(URL,{useUnifiedTopology: true });
         console.log("we rolling database connected");
    }catch(error){
        console.log(error.message);
    }
}

export default connection;


