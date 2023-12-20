import mongoose from "mongoose"


const DoctorWorkDivision=new mongoose.Schema({
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        required:true,
    },
    time:{
          type:Number,
        required:true
    }
})

const DoctorSchema=new mongoose.Schema({

    


name:{
    type: 'string',
    required:true,
},
salary:{
type:String,
required:true,
},
qualification:{
    type:String,
    required:true,
},
experienceInYears:{
    type:Number,
    default:0,
},
worksInHospitals:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
],
workDivision:[DoctorWorkDivision]


},{timestamps:true})

export const Doctor=mongoose.model("Doctor",DoctorSchema);