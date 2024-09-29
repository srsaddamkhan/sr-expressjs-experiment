const express = require("express");

const app = express();


// Testing purpose by Sr
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Sr server...");
});


// Create custom url by Sr
app.get("/srmine", (req, res) => {
    res.status(200).send("Welcome to Sr World...");
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
