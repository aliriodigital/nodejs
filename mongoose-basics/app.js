// MANAGES FRAMEWORK
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

// CONNECT MONGODB
mongoose.connect("mongodb://localhost:27017/node-app")
    .then(() => { console.log("Mongodb connected"); })
    .catch((error) => { console.log(error) });


// DEFINES PORT
const port = 4000;



// DEFINE ROUTES
app.get("/", async(req, res) => {
    const Product = require("./models/Product");
    const products = await Product.find();
    let content = "<ol>";
    products.forEach(e => {
        content += `<li>${e}</li>`;
    });
    content += "</ol>";
    res.send(`
        <h1>Welcome to this site</h1>
        <p>This shows how to connect app with mongodb</p>
        <p>Create products on database. Then they should be displayed below:</p>
        ${content}
    `);
});

// SET APP TO LISTEN ON PORT
app.listen(port, () => {
    console.log(`Node app listening on port ${port}`);
});