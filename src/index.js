const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;

app.use(express.static(path.join(__dirname, "public/")));

// http logger
app.use(morgan("combined"));

//template engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log(path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.listen(port, () => console.log("listen at http://localhost: 3000"));
