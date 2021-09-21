const express = require("express");

const app = express();
app.get("/", (req, res) => {
    eventEmitter.emit("start");
    res.status(200).send({ success: true });
})

module.exports = app;