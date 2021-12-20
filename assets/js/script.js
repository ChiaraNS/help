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
