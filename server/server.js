const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./keys").mongoURI;
const mongoose = require("mongoose");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

app.use("/cities", require("./routes/cities"));

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));
