require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('Database Connected..!!'))
    .catch((err) => console.log(err));
}

module.exports = connectDB;  