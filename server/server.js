const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const config = require("./node_modules/config");
const db = config.get("mongoURI");
const cors = require("cors");

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});

app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/activities", require("./routes/activities"));
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));
