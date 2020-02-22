var db = require("../models");

module.exports = function (app) {
    // Finding all listings
    app.get("/api/listing", function (req, res) {
        db.Listings.findAll({
            include: [db.Search]
        }).then(function (dbListing) {
            res.json(dbListing);
        });
    });

    // Finding one listing based off ID
    app.get("/api/listing:id", function (req, res) {
        db.Listings.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Search]
        }).then(function (dbListing) {
            res.json(dbListing);
        });
    });

    // Saving Post
    app.post("/api/listing", function (req, res) {
        db.Listings.create(req.body).then(function (dbListing) {
            res.json(dbListing);
        });
    });

    // Delete Route
    app.delete("/api/listing/:id", function (req, res) {
        db.Listings.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbListing) {
            res.json(dbListing);
        });
    });

    // Put route for updating posts
    app.put("/api/listing", function (req, res) {
        db.Listings.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbListing) {
            res.json(dbListing);
        });
    });
};
