
const mongoose = require('mongoose');
require('dotenv').config()

const connection = () => {
    mongoose.connect(process.env.DB_URL).then(() => { console.log({ message: 'connection successful' }); }).catch((error)=>{console.log({message:"Connection Failed!", error})})
}

mongoose.set('strictQuery',false)

module.exports = {connection}

