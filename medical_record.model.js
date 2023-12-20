import mongoose from "mongoose"

const MedicalRecordSchema=new mongoose.Schema({




},{timestamps:true})

export const MedcialRecord=mongoose.model("MedicalRecord",MedicalRecordSchema);

