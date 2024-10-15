const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/complaint_management'; // Your database URI

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;