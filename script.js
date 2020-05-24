$(document).ready(function(){

$("#currentDay").text(moment ().format("[Today's date is: ]dddd, MMMM Do"))
$("#currentTime").text(moment ().format("[The current time is: ]HH:mm"))

/*$(".saveBtn").click(function(){
    var description = $(this).siblings(".description").val()
    var time = //this button's parents id
    localStorage.setItem(time, description)
})

//$(".saveBtn").click(function(){
  //  var description = 
//})*/


var theParent = document.querySelector("#tableSave");
theParent.addEventListener("click", buttonStuff, false);

function buttonStuff (e) {
  if (e.target !== e.currentTarget) {
    //var clickeditem = e.target.id;
    var meetDeets = document.getElementById("mtgDetail1").value;
    localStorage.setItem("A", JSON.stringify(meetDeets));
  } 

   if (e.target !== e.currentTarget) {
    //var clickeditem = e.target.id;
    var meetDeets = document.getElementById("mtgDetail2").value;
    localStorage.setItem("B", JSON.stringify(meetDeets));
  } 




  e.stopPropagation();
}

var correctTime = moment().hour();
        var time9 = moment().hour(9).minutes(00).seconds(00);
        var time10 = moment().hour(10).minutes(00).seconds(00);
        function rightColor() {
        if (correctTime > time9) {
            $("box9").addClass("past");
        }
        else if (correctTime >= time9 && correctTime < time10) {
            $("box9").addClass("present");
            $("box9").removeClass("past");
        }
        else (correctTime < time9); {
            $("box9").addClass("future");
            $("box9").removeClass("present");
            $("box9").removeClass("past");
        }

}})


//var timeCompare = parseInt($(this).attr("id"));
//var currentTime = moment().hours();





/*Example of 9am and 10am HTML
<!-- 9 am -->
    <div class="input-group mb-3">
      <div class="input-group-prepend row">
        <span class="input-group-text hour">09:00 AM</span>
      </div>
      <textarea value="" id="comment9am" type="text" cols="100" rows="2" class="form-control description textarea"></textarea>
      <div class="input-group-append">
        <button id="button9am" class="btn btn-outline-secondary saveBtn" type="button"><i
            class="far fa-save"></i></button>
      </div>
    </div>
    <!-- 10 am-->
    <div class="input-group mb-3">
      <div class="input-group-prepend row">
        <span class="input-group-text hour">10:00 AM</span>
      </div>
      <textarea id="comment10am" value="" type="text" cols="100" rows="2" class="form-control description textarea"></textarea>
      <div class="input-group-append">
        <button id="button10am" class="btn btn-outline-secondary saveBtn" type="button"><i
            class="far fa-save"></i></button>
      </div>
    </div>*/

/*Example of localStorage for 9am and 10am
function nineAM() {
  var input_textarea = document.querySelector("#comment9am");
  var output_div = document.querySelector("#comment9am");
  var save_button = document.querySelector("#button9am");
  save_button.addEventListener("click", updateOutput);
  output_div.textContent = localStorage.getItem("content");
  input_textarea.value = localStorage.getItem("content");
  function updateOutput() {
    localStorage.setItem("content", input_textarea.value);
    output_div.textContent = input_textarea.value;
  }
}
function tenAM() {
  var input_textarea2 = document.querySelector("#comment10am");
  var output_div2 = document.querySelector("#comment10am");
  var save_button2 = document.querySelector("#button10am");
  save_button2.addEventListener("click", updateOutput2);
  output_div2.textContent = localStorage.getItem("content2");
  input_textarea2.value = localStorage.getItem("content2");
  function updateOutput2() {
    localStorage.setItem("content2", input_textarea2.value);
    output_div2.textContent = input_textarea2.value;
  }
}*/
