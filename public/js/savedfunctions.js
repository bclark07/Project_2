//listens for button click on the delete button
$(function() {
  //on page load want to populate html with already saved jobs
  // getSaved();

  // On-click for starting the job search.
  $(".deleteBtn").on("click", function() {
    console.log("Delete has been clicked.");

    var jobID = $(this).attr("id");
    console.log(jobID);

    $.ajax("/api/listings/" + jobID, {
      type: "DELETE"
      //   data: jobID
    }).then(function() {
      console.log("Delete 3 has been clicked.");
    });
  });
});
