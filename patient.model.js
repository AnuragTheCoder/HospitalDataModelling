import mongoose from "mongoose"

const PatientSchema=new mongoose.Schema({

name:{
    type:String,
    required:true,
},
image:{
    type:String,
},

diagnosedWith:{
    type:String,
    required:true,
},

address:{
    type:String,
    required:true,
},

age:{
    type:Number,
    required:true,
},

BloodGroup:{
    enum:["AB+","A+","B+","O+","AB-","A-","B-","O-"],
    type:String,
    required:true,
},

gender:{
    type:String,
    enum:["M","F","O"],
    required:true,
},

admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"

},

doctorReferred:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Doctor"
}




},{timestamps:true})

export const Patient=mongoose.model("Patient",PatientSchema);