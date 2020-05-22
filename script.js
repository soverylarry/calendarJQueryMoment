$(document).ready(function(){

$("#currentDay").text(moment ().format("[Today's date is: ]dddd, MMMM Do"))
$("#currentTime").text(moment ().format("[The current time is: ]HH:mm"))

/*$(".saveBtn").click(function(){
    var description = $(this).siblings(".description").val()
    var time = //this button's parents id
    localStorage.setItem(time, description)
})*/

//$(".saveBtn").click(function(){
  //  var description = 
//})

$(".saveBtn").click(function(){
    var meetDeets = localStorage.setItem('D', 'mtgDetail')

})

})

