const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const posts = require("./routes/posts");
const users = require("./routes/users");
app.use(bodyParser.json());

app.use("/api/posts", posts);
app.use("/api/users", users);

const uri = `mongodb+srv://skz:admin@cluster0.c7xj5qh.mongodb.net/socialX?retryWrites=true&w=majority&appName=Cluster0`;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose
  .connect(uri, clientOptions)
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log("ERROR" + err);
  });
