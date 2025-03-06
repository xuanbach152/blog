const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;
const hbs = require("express-handlebars");

app.use(express.static(path.join(__dirname, "public")));

// http logger
app.use(morgan("combined"));

// template engine
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//route
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/tintuc", (req, res) => {
  res.render("news");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
