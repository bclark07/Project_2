var db = require("../models");
var axios = require("axios");

module.exports = function(app) {
  // GitHub Job Post API Call
  // Both - used on search.js
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

  // Location ONLY - used on search.js
  app.get("/api/listings/:location", function(req, res) {
    var location = req.params.location;
    axios
      .get("https://jobs.github.com/positions.json?location=" + location)
      .then(function(response) {
        res.json(response.data);
      });
  });

  // Keyword ONLY - used on search.js
  app.get("/api/search/:keyword", function(req, res) {
    var keyword = req.params.keyword;
    axios
      .get("https://jobs.github.com/positions.json?description=" + keyword)
      .then(function(response) {
        res.json(response.data);
      });
  });

  // // Finding all listings
  app.get("/api/listings", function(req, res) {
    db.Listings.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Route to save our data to the listing db - used on search.js
  app.post("/api/saved-listings", function(req, res) {
    db.Listings.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // Route to get data from listings db - used on search.js
  // app.get("/api/saved-listings", function(req, res) {
  //   db.Listings.findAll({
  //     where: {
  //       jobID: req.params.id
  //     }
  //   }).then(function(response) {
  //     res.json(response);
  //   });
  // });

  // Delete Route  - used on savedfunctions.js
  app.delete("/api/listings/:id", function(req, res) {
    db.Listings.destroy({
      where: {
        jobID: req.params.id
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
