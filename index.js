import express  from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoutes.js"
import productRoute from "./routes/productRoutes.js"
import cors from "cors";
import path from "path";
const PORT = process.env.PORT || 8080;
const app = express();

dotenv.config();

//databse  configuration
connectDB();


//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/category", categoryRoute)
app.use("/api/v1/products",productRoute)

app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} mode and on port ${PORT}`);
})