import mongoose from "mongoose";
const
      {model,Schema}=mongoose;
const denemeShema=new Schema({
    stampName:{
          type:String,
          required:true,
          minlength:2,
          maxlength:15
    },
    stampYear:{
          type:Number,
          required:true,
          minlength:3,
          maxlength:20
    },
    stampPrice:{
          type:Number,
          required:true,
          minlength:0,
          maxlength:100
    },
},{
      timestamps:true
}
);
export default model("stamps",denemeShema);