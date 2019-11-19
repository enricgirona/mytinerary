const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const db = require("./keys").mongoURI;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/activities", require("./routes/activities"));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));
