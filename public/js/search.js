
$(function() {
  //on page load want to populate html with already saved jobs

  // On-click for starting the job search.
  $("#searchBtn").on("click", function() {
    //put in code to clear previous search results
    $("#results").empty();
    console.log("Search has been clicked.");

    var keyword = $("#autocomplete-keyword-input").val();
    var location = $("#autocomplete-location-input").val();

    // This portion gets the API's information based off your search
    // Both Searches
    if (keyword.length > 0 && location.length > 0) {
      $.get("/api/listings/" + keyword + "/" + location).then(function(data) {
        console.log(data);
        //returns json response with job results

        // For-Loop that dynamically adds data in tables using Materialize i.e. What you see after you hit search
        for (var i = 0; i < data.length; i++) {
          var row = $("<tr>");
          var td = $("<td>");
          td.append(
            data[i].title +
              "<br>" +
              data[i].location +
              "<br>" +
              data[i].company +
              "<br>" +
              data[i].how_to_apply +
              "<br>" +
              data[i].created_at
          );

          //   Dynamically created Save button and adding data attributes to them
          var button = $("<button>");
          button.text("Save");
          button.attr("class", "saveBtn");
          button.attr("data-id", data[i].id);
          button.attr("data-index", i);

          //   Adds everything to table
          td.append(button);
          row.append(td);
          $("#results").append(row);
        }

        $("#numResults").html(data.length);

        // Save button that saves data to our database
        $(".saveBtn").on("click", function() {
          var i = $(this).attr("data-index");
          console.log(data[i]);
          var savedListing = {};

          savedListing.company = data[i].company;
          savedListing.location = data[i].location;
          savedListing.title = data[i].title;
          savedListing.howToApply = data[i].how_to_apply;

          $.ajax("/api/saved-listings", {
            type: "POST",
            data: savedListing
          }).then(function() {
            console.log("Save has been clicked.");
          });
        });
      });

      //   Keyword ONLY
    } else if (keyword.length > 0 && location.length === 0) {
      $.get("/api/listings/" + keyword).then(function(data) {
        console.log(data);
        //returns json response with job results

        // For-Loop that dynamically adds data in tables using Materialize i.e. What you see after you hit search
        for (var i = 0; i < data.length; i++) {
          var row = $("<tr>");
          var td = $("<td>");
          td.append(
            data[i].title +
              "<br>" +
              data[i].location +
              "<br>" +
              data[i].company +
              "<br>" +
              data[i].how_to_apply +
              "<br>" +
              data[i].created_at
          );

          //   Dynamically created Save button and adding data attributes to them
          var button = $("<button>");
          button.text("Save");
          button.attr("class", "saveBtn");
          button.attr("data-id", data[i].id);
          button.attr("data-index", i);

          //   Adds everything to table
          td.append(button);
          row.append(td);
          $("#results").append(row);
        }

        $("#numResults").html(data.length);

        // Save button that saves data to our database
        $(".saveBtn").on("click", function() {
          var i = $(this).attr("data-index");
          console.log(data[i]);
          var savedListing = {};

          savedListing.company = data[i].company;
          savedListing.location = data[i].location;
          savedListing.title = data[i].title;
          savedListing.howToApply = data[i].how_to_apply;
          savedListing.jobID = data[i].id;

          $.ajax("/api/saved-listings", {
            type: "POST",
            data: savedListing
          }).then(function() {
            console.log("Save has been clicked.");
          });
        });
      });

      //   Location ONLY
    } else if (location.length > 0 && keyword.length === 0) {
      $.get("/api/listings/" + location).then(function(data) {
        console.log(data);
        //returns json response with job results

        // For-Loop that dynamically adds data in tables using Materialize i.e. What you see after you hit search
        for (var i = 0; i < data.length; i++) {
          var row = $("<tr>");
          var td = $("<td>");
          td.append(
            data[i].title +
              "<br>" +
              data[i].location +
              "<br>" +
              data[i].company +
              "<br>" +
              data[i].how_to_apply +
              "<br>" +
              data[i].created_at
          );

          //   Dynamically created Save button and adding data attributes to them
          var button = $("<button>");
          button.text("Save");
          button.attr("class", "saveBtn");
          button.attr("data-id", data[i].id);
          button.attr("data-index", i);

          //   Adds everything to table
          td.append(button);
          row.append(td);
          $("#results").append(row);
        }

        $("#numResults").html(data.length);

        // Save button that saves data to our database
        $(".saveBtn").on("click", function() {
          var i = $(this).attr("data-index");
          console.log(data[i]);
          var savedListing = {};

          savedListing.company = data[i].company;
          savedListing.location = data[i].location;
          savedListing.title = data[i].title;
          savedListing.howToApply = data[i].how_to_apply;

          $.ajax("/api/saved-listings", {
            type: "POST",
            data: savedListing
          }).then(function() {
            console.log("Save has been clicked.");

          });
        });
      });
    } else {
      alert("Please enter a job search.");
    }
  });
});
