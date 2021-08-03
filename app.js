/* Adoptapet bootstrap */

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require("./routes");

// Global app object
const app = express();

// Middleware config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use("/v1", router);

// Handling not found errors
app.use(function (req, res, next) {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// Bootstrap
const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`App running. Listening on port ${server.address().port}`)
});