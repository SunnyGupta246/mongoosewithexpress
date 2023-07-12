import app from "./app.js"

const port = 3000;
import mongoose from "mongoose"
// mongoose.connect('mongodb://127.0.0.1:27017/test');

(async()=>{
    try{

        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('mongodb connected');

        app.on("error", (err) => {
            console.log("ERROR", err);
            throw err;
        })

        app.listen(port,()=>{
            console.log(`listen at the port number ${port}`);
        })
    }
    catch(error){
            console.error("ERROR", err);
            throw err;
        }
})()
app.listen(port,()=>{
    console.log(`listen at the port number ${port}`)
})