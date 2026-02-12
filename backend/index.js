const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

app.get("/", (req, res) => {
    
    res.json({
        message: "woho!!",
        success: true
    });
});

mongoose.connect("mongodb+srv://harshmarthak63_db_user:7bdhQFT4Fn7oanJa@cluster0.qbaqmyz.mongodb.net/?appName=Cluster0").then(() => {
    console.log("DB connected");

    app.listen(3000, () => {
        console.log("Server running at port 3000");
    });

}).catch(err => {
    console.log("DB not connected " + err);
});