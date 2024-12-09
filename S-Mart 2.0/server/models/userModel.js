import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    maidenName: String,
    age: Number,
    gender: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    birthDate: String,
    image: String,
    bloodGroup: String,
    height: Number,
    weight: Number,
    eyeColor: String,
    hair: {
        color: String,
        styled: String
    },
    ip: String,
    address: {
        address: String,
        city: String,
        state: String,
        postalCode: String,
        coordinates: {
            lat: Number,
            lng: Number
        },
        country: String
    },
    macAddress:String,
    university: String,
    bank:{
        cardExpire: String,
        cardNumber: String,
        cardType:String,
        currency: String,
        iban: String
    },
    company:{
        department: String,
        name: String,
        title: String,
        address:{
            address: String,
            city: String,
            state: String,
            stateCode: String,
            postalCode: String,
            coordinates: {
                lat: Number,
                lng: Number
            }
        }
    },
    ein: String
})

export const User = mongoose.model('users', userSchema)