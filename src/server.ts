import mongoose from "mongoose";
import app from "./app";



async function main() {
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/myapp');
  // await mongoose.connect('mongodb://username:password@host:port/database?options...');
  app.listen(process.env.PORT, () => {
    console.log(`Server is Runnnin on  port ${process.env.PORT}`)
  })
    }catch(error){
        console.log(error);
    }
    
}

main();