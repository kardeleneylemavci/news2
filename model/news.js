import  mongoose  from "mongoose";
const 
    {model,Schema}=mongoose;
const newsSchema=new Schema({
    author:{
        type:String,
        required:true,
        minlength:2,
        maxlength:200
    },
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:200
    },
    description:{
        type:String,
        required:true,
        minlength:5,
    },
},{
    timestamps:true
});
export default model("news",newsSchema);