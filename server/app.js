require("colors")
require("dotenv").config()
const cors = require("cors");
const express = require("express");
const connectDB = require("./db/conn");
const router = require("./routes/router");


connectDB();
// create a app
const app = express();
// Assign Port no
const PORT = 8000;

// middleWare
app.use(express.json()); //add because jb fronted se data aayega toh json formate mein aaye otherwise jb hmm body se data get kareinge toh undefined show karega
app.use(cors()); // cors ka use esliye kr rahein hai kyu ki fronted and backend dono different port pe run ho reha hai
// jb hmm fronted se koi req kareinge server pe toh cors ki error aayegi esliye cors ko add kiya
app.use(router);

app.get('/', (req, res) => {
    res.status(200).send("hello every one")
});

app.listen(PORT, () => {
    console.log(`server runnning at port ${PORT}`.bgGreen)
})