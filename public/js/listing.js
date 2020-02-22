//This file will handle the the clicks on home page.

// This file listens for button clicks
$(function () {
  // FUNCTION THAT LISTENS FOR THE EAT BURGER CLICK
  $(".submitSearch").on("click", function () {
    console.log("Search has been clicked.");

    var id = $(this).data("id");
    var keyword = $(this).data("keyword");
    var city = $(this).data("city");


    var newSearch = {
      keyword: keyword,
      city: city
    };
    console.log(newSearch);
    //Save search to database
    $.ajax("/api/listing/" + id, {
      type: "PUT",
      data: newSearch
    }).then(function () {
      console.log(newSearch + " has been stored in search history");
      location.reload();
    });

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
  $(".saveListing").on("click", function () {
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
    }).then(function () {
      console.log(newListing + " has been stored in saved listings");
      location.reload();
    });
  });

  // CLICK HANDLER FOR ADDING A SAVED SEARCH
  $(".logout").on("click", function () {
    console.log("Logout has been clicked.");
    // Logout needs to be coded
  });
});
