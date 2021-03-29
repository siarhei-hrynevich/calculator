const PORT = process.env.PORT || 8080;

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/client/public"));

app.listen(PORT);