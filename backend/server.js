import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

const app = express();

const PORT = process.env.PORT || 7000

connectDB()
connectCloudinary()

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});