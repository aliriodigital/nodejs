// MANAGES FRAMEWORK
const express = require("express");
const path = require("path");
var exphbs = require("express-handlebars");
const app = express();



// DEFINES PORT
const port = 4000;

// SET TEMPLATE ENGINE
app.set('views', './views');
app.engine("hbs", exphbs.engine({
    defaultLayout: "main",
    extname: "hbs",
    layoutsDir: path.join(__dirname, "/views/layouts"),
    partialsDir: path.join(__dirname, "/views/partials"),
    helpers: {
        uppercase: (string) => {
            return string.toUpperCase();
        }
    }
}));
app.set("view engine", "hbs");


// DEFINE ROUTES
app.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "Home",
    });
});

app.get("/products", async(req, res) => {
    res.render("products", {
        pageTitle: "Products",
    });
});

app.get("/us", async (req, res) => {
    res.render("us", {
        pageTitle: "Us"
    });
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        pageTitle: "Contact",
    });
});

// SET APP TO LISTEN ON PORT
app.listen(port, () => {
    console.log(`Node app listening on port ${port}`);
});