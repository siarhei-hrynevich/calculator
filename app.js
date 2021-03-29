const PORT = process.env.PORT || 8080;

const express = require("express");

const app = express();

app.use(express.static(__dirname + "/client/public"));

app.use("/", function(request, response) {

    response.send("<h1>Главная страница</h1>");
});

app.listen(PORT);