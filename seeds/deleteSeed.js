const mongoose = require('mongoose');
const Campground = require('../models/campground'); // Ensure the correct path to the Campground model

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const deleteData = async () => {
    try {
        await Campground.deleteMany({}); // This will delete all campgrounds
        console.log("All campgrounds have been deleted");
    } catch (err) {
        console.log("Error deleting campgrounds:", err);
    } finally {
        mongoose.connection.close(); // Close the connection after deleting
    }
};

deleteData();
