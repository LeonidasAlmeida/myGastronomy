const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('../backend/src/config/db');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const authMiddleware = require('./src/middlewares/authMiddleware');
const roleMiddleware = require('./src/middlewares/roleMiddleware');
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
app.use(errorMiddleware)
//Router connections
app.use("/test",require('./src/routers/testRouter'));
app.use("/login",require('./src/routers/users/users_router'));
app.use("/users",authMiddleware,require('./src/routers/users/users_router'));
app.use("/restaurants",authMiddleware,require('./src/routers/restaurant/restaurants_router'));
app.use("/category",authMiddleware,require('./src/routers/category/categoryRouter'));
app.use("/item",authMiddleware,require('./src/routers/item/itemRouter'));
app.use("/order",authMiddleware,require('./src/routers/order/orderRouter'))
//listem port to connection
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`.white.bgGreen);
})