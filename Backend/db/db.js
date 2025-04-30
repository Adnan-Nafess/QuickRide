const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true, // This ensures MongoDB's new connection handling
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = connectDB;
