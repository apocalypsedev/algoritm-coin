import { Schema, model } from "mongoose";

const MentorSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    displayName:{
        type: String,
        trim: true
    },
    phoneNumber:{
        type:Number,
        trim: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps:true})

export const Mentor = model("mentor", MentorSchema);