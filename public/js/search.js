//This file will handle the the clicks on home page.

// This file listens for button clicks

// Search function that prints the data from the API on the page.

// NOTE FROM CLINT: My tutor told me that it's a lot safer to call the API within the search-api-routes folder. For example,
//  if someone wanted to steal our API key, all they would need to do is open Inspect in Google. I know we don't have an API
// key, but good tip for next time!

$(function() {
    // On-click for starting the job search.
    $("#searchBtn").on("click", function() {
        console.log("Search has been clicked.");

        var keyword = $("#keywordSearch").val();
        var location = $("#citySearch").val();

        // This portion gets the API's information based off your search
        if (keyword.length > 0 && location.length > 0) {
            $.get("/api/search/" + keyword + "/" + location).then(function(
                data
            ) {
                console.log(data);

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
                    button.attr("class", "saveButton");
                    button.attr("data-id", data[i].id);
                    button.attr("data-index", i);

                    //   Adds everything to table
                    td.append(button);
                    row.append(td);
                    $("#results").append(row);
                }

                $("#numResults").html(data.length);

                // Save button that saves data to our database
                $(".saveButton").on("click", function() {
                    var i = $(this).attr("data-index");
                    console.log("Save has been clicked.");
                    console.log(data[i]);
                    var savedListing = {};
                    savedListing.title = data[i].title;
                    $.ajax("/api/search", {
                        type: "POST",
                        data: savedListing
                    }).then(function() {
                        console.log(
                            savedListing + " has been stored in saved listings"
                        );
                        location.reload();
                    });
                });
            });
        }
        //   NOTE FROM CLINT: This is most of the code I wrote over, including the API. I'm leaving it here for now, but feel free to delete if we no longer need it.
        // const id = $(this).data("id");

        // var newSearch = {
        //   keyword: keyword,
        //   city: city
        // };
        // console.log(newSearch);
        // //Save search to database
        // $.ajax("/api/listing/" + id, {
        //   type: "PUT",
        //   data: newSearch
        // }).then(function () {
        //   console.log(newSearch + " has been stored in search history");
        //   location.reload();
        // });

        // function listingPull (keyword, city) {
        //   $.ajax({
        //     url: "https://jobs.github.com/positions.json?description=javascript&location=new+york",
        //     method: "GET"
        //   }).then(function (response) {
        //     console.log(response + "----testing");
        //   });
        // }
        // listingPull();
    });

    // CLICK HANDLER FOR ADDING A SAVED SEARCH
    // DON'T DELETE: We still need this for saving the whole listing.

    $(".saveListing").on("click", function() {
        console.log("Save listing has been clicked.");

        var id = $(this).data("id");
        var companyName = $(this).data("companyName");
        var title = $(this).data("title");
        var summary = $(this).data("summary");
        var locality = $(this).data("location");
        var dateCreated = $(this).data("dateCreated");

        var newListing = {
            companyName: companyName,
            title: title,
            summary: summary,
            locality: locality,
            dateCreated: dateCreated
        };
        console.log(newListing);
        //Save search to database
        $.ajax("/api/listing/" + id, {
            type: "PUT",
            data: newListing
        }).then(function() {
            console.log(newListing + " has been stored in saved listings");
            location.reload();
        });
    });

    // CLICK HANDLER FOR ADDING A SAVED SEARCH
    $(".logout").on("click", function() {
        console.log("Logout has been clicked.");
        // Logout needs to be coded
    });
});