import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js'
import reservationRoute from './routes/reservationRoute.js'

const app = express();

const PORT = process.env.PORT || 7000

connectDB()
connectCloudinary()

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter)
app.use('/api/reservation', reservationRoute)

app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});