// setup server
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send("This is my Note app");
})

app.listen(port, () => {
  console.log(`Note app listening on port ${port}`)
})