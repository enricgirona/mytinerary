const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const cors = require("cors");

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/activities", require("./routes/activities"));
app.use("/user", require("./routes/users"));
app.use("/auth/google", require("./routes/google"));
app.use("/auth", require("./routes/auth"));
app.use("/favorites", require("./routes/favorites"));

mongoose
  .connect(process.env.MONGO_URI || db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));
