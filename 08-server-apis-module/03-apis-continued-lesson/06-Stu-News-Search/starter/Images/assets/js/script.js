$("#search-btn").on("click", function () {
    let searchTerm = $("#search-word").val().trim();
    let numRecords = $("#search-num").val();
    let startYear = $("#search-start-year").val();
    let endYear = $("#search-end-year").val();

    // searchTerm = "";
    // //numRecords.val("");
    // startYear = "";
    // endYear = "";

    console.log(searchTerm,numRecords,startYear,endYear)

    // pass search terms to backend fetch query
    

    //append results to Top Articles Div
    $(".results").append("RESULTS GO HERE")
});