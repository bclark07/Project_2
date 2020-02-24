var db = require("../models");

// NOTE FROM CLINT: Needed this npm package to call an API here. Make sure to install this or the app won't work :/
var axios = require("axios");

// NOTE FROM CLINT: My tutor told me that it's a lot safer to call the API within the search-api-routes folder. For example,if someone wanted to steal our API key, all they would need to do is open Inspect in Google. I know we don't have an API key, but good tip for next time!

module.exports = function(app) {
  // GitHub Job Post API Call
  app.get("/api/listings/:keyword/:location", function(req, res) {
    var keyword = req.params.keyword;
    var location = req.params.location;
    axios
      .get(
        "https://jobs.github.com/positions.json?description=" +
          keyword +
          "&location=" +
          location
      )
      .then(function(response) {
        res.json(response.data);
      });
  });

  // Finding all listings
  app.get("/api/listings", function(req, res) {
    db.Listings.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Finding one search based off ID
  app.get("/api/listings:id", function(req, res) {
    db.Listings.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Route to save our data to the listing page
  app.post("/api/saved-listings", function(req, res) {
    db.Listings.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // Delete Route
  app.delete("/api/listings/:id", function(req, res) {
    db.Listings.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Put route for updating posts
  app.put("/api/listings", function(req, res) {
    db.Listings.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
