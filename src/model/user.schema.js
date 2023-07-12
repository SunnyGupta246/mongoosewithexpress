import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: [true, "name is require"]
    },
    email: String,
    password: String,

});
export default mongoose.model("User" ,userSchema);