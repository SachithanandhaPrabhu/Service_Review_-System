
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const  Service_Review = require('./Routes/Review_System.Routes')
const dotenv =require('dotenv');
dotenv.config();
app.use(express.json());
app.use('/api/Service_Review',Service_Review);
app.listen(3000)

// mongodb connecting
mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => console.log('Connected!'))
  .catch((error) => console.log('Not connected',error))
  