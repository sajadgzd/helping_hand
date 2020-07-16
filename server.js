const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("react_tree_age/build"));
}

app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./react_tree_age/build/index.html"));
  });

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/database", 
                 {useNewUrlParser: true});

app.listen(PORT, () => {
    console.log(`Server started, listening on ${PORT}`);
})