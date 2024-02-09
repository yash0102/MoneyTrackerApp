const mongoose = require('mongoose')
require('dotenv').config()
const connectDb = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/MoneyTracker').then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDb