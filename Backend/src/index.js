
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("../config/connection");
const userRoute = require('../routes/user.routes');
const carRoute = require('../routes/cars.routes');
const OemRouter = require('../routes/oem.routes');


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/user',userRoute)
app.use('/car',carRoute)
app.use('/oem',OemRouter)


app.get('/', async(req , res)=>{
    res.send('Welcome to Buycars API Server')
})

app.listen(port, async () => {
    connection();
    console.log(`Server listening on ${port}`);
  });