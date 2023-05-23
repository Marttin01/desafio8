import mongoose from "mongoose"

const userCollection = 'users'

const userSchema = new mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    email: {type:String, required:true, unique:true},
    age: {type:Number},
    password: {type:String, required:true},
    // cart: {type:String}
    rol: {type:String, num:'user,admin', default:'user'}
}, {versionKey:false})

export const userModel = mongoose.model(userCollection, userSchema)