const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const scheduleRoutes = require('./routes/scheduleRoutes');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB PlanIt'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.use('/api/schedules', scheduleRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port:${PORT}`);
});
