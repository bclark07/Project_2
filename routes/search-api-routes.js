var db = require("../models");

// NOTE FROM CLINT: Needed this npm package to call an API here. Make sure to install this or the app won't work :/
var axios = require("axios");


// NOTE FROM CLINT: My tutor told me that it's a lot safer to call the API within the search-api-routes folder. For example,if someone wanted to steal our API key, all they would need to do is open Inspect in Google. I know we don't have an API key, but good tip for next time!

module.exports = function (app) {

    // GitHub Job Post API Call
    app.get("/api/search/:keyword/:location", function(req, res) {
        var keyword = req.params.keyword;
        var location = req.params.location;
        axios.get("https://jobs.github.com/positions.json?description=" + keyword + "&location=" + location).then(function (response) {
              res.json(response.data);
        });
    });

    // Finding all listings
    app.get("/api/search", function (req, res) {
        db.Search.findAll({}).then(function (dbSearch) {
            res.json(dbSearch);
        });
    });

    // Finding one search based off ID
    app.get("/api/search:id", function (req, res) {
        db.Search.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbSearch) {
            res.json(dbSearch);
        });
    });

    // Route to save our data to the listing page
    app.post("/api/search", function (req, res) {
        db.Search.create(req.body).then(function (dbSearch) {
            res.json(dbSearch);
        });
    });

    // Delete Route
    app.delete("/api/search/:id", function (req, res) {
        db.Search.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbSearch) {
            res.json(dbSearch);
        });
    });

    // Put route for updating posts
    app.put("/api/search", function (req, res) {
        db.Search.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbSearch) {
            res.json(dbSearch);
        });
    });
};
