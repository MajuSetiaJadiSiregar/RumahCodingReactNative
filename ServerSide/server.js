require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = process.env.URIDB;
const PORT = process.env.PORT || 5000;
const userRoute = require('./routes/UserRouter');
const karyawanRoute = require('./routes/KaryawanRouter');


const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(uri, err => {
   if(err) throw err;
   console.log('database connect')
});


app.use('/user', userRoute);
app.use('/karyawan', karyawanRoute);

app.listen(PORT, () => {
   console.log('server run di port ', PORT);
});



