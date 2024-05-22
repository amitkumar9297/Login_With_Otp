const colors = require("colors");
const mongoose = require("mongoose");
const DB = process.env.MONGO_URL

const connectDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log(`connected to mongodb Database ${mongoose.connect.host}`.bgMagenta.white)
    } catch (err) {
        console.log(`MONGO Connect Error ${err}`.bgRed.white)
    }
}

module.exports = connectDB;