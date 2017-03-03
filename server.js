var app = require("express")();
var http = require("http").Server(app);

app.get("/healthcheck", function(req, res) {
    setTimeout(
        () => {
            res.json({
                status: 'ok'
            });
        },
        10000
    );
});

http.listen(3000, function() {
    console.log("listening on *:3000");
});
