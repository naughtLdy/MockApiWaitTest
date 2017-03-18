'use strict';

const app = require("express")()
    , delay = require('./delay');

app.get("/healthcheck", delay(10), function(req, res) {
    res.json({ status: 'ok' });
});

app.listen(3000, function() {
    console.log("listening on *:3000");
});
