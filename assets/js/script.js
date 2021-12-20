//header-> current time 
var currentDay = moment().format("dddd, MMMM Do YYYY");   
$("#currentDay").html(currentDay);

//save button function
$(".saveBtn").on("click", function() {
    var hour = $(this).siblings(".hour").text();
    var task = $(this).siblings(".description").val();
   
    //save data in local storage
    localStorage.setItem(hour, task);
});

//container for time data
function timeLoop() {

    //get the current hour
    var currentTime = moment().hours();

    //color coding past present and future tasks
    $(".time-block").each(function() {
      
        var currentHour = parseInt($(this).attr("id"));

        if (currentTime > currentHour) {
            $(this).addClass("past");
        } else if (currentTime < currentHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
};

//refresh
function refresh () {
    $(".hour").each(function() {
        var hourTime = $(this).text();
        var storageHour = localStorage.getItem(hourTime);

        if (storageHour !== null) {
            $(this).siblings(".description").val(storageHour);
        }
    });
}

timeLoop();
refresh();