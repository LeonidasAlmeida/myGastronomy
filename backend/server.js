const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('../backend/src/config/db');
//connect app
const app = express();
//configuring dotenv
dotenv.config();
//connect to database
connectDB();
//PORT
const PORT = process.env.PORT || 5000;
//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
//Router connections
app.use("/test",require('./src/routers/testRouter'));
app.use("/users",require('./src/routers/users/users_router'));
app.use("/restaurants",require('./src/routers/restaurant/restaurants_router'));
app.use("/category",require('./src/routers/category/categoryRouter'));
//listem port to connection
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`.white.bgGreen);
})