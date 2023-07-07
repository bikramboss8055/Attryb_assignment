
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("../config/connection");



const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());




app.get('/', async(req , res)=>{
    res.send('Welcome to Buycars API Server')
})

app.listen(port, async () => {
    connection();
    console.log(`Server listening on ${port}`);
  });