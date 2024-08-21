import e from "express";
import mongoose from "mongoose";

const Recruiter = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    areaOfInterest: {
        type: [String],
    },
    university: {
        type: String,
    },
    email: {
        type: String,
        unqiue: true,
        required: true,
        unique : true,
    },
    socialMedia: {
        linkedIn: {
            type: String,
        },
        twitter: {
            type: String,
        },
    },
    phoneNumber: {
        type: Number,
        // required: true
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // updateAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    rating: {
        type: Number,
        default: 5,
        min : 0,
        max:5,
    },
    password: {
        type: String,
        required: true,
    },
    qualifications: {
        type: [{
            degree: {
                type: String,
            },
            year: {
                type: Number,
            },
            college: {
                type: String,
            },
            commnets: {
                type: String,
            }
        }],
    }
},{timestamps: true})

export default mongoose.model("Recruiter", Recruiter);