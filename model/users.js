import  mongoose  from "mongoose";
const 
    {model,Schema}=mongoose;
const userSchema=new Schema({
    name:{
        type:String,
        require:true,
        minlength:2,
        maxlength:200
    },
    email:{
        type:String,
        require:true,
        minlength:5,
        maxlength:200
    },
    password:{
        type:String,
        require:true,
        minlength:5,
        maxlength:100
    }


},{
    timestamps:true
}
);
export default model("users",userSchema);