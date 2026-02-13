const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    
    res.json({
        message: "woho!!",
        status: "successfull"
    });
});

mongoose.connect("mongodb+srv://harshmarthak63_db_user:7bdhQFT4Fn7oanJa@cluster0.qbaqmyz.mongodb.net/?appName=Cluster0").then(() => {
    console.log("DB connected");

    app.listen(PORT, () => {
        console.log("Server running at port " + PORT);
    });

}).catch(err => {
    console.log("DB not connected " + err);
});