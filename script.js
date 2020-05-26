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
    var meetDeets = document.querySelector(".mtgDetail1").value;
    localStorage.setItem("A", meetDeets);
    
  } 

   if (e.target !== e.currentTarget) {
    //var clickeditem = e.target.id;
    var meetDeets = document.querySelector(".mtgDetail2").value;
    localStorage.setItem("B", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    //var clickeditem = e.target.id;
    var meetDeets = document.querySelector(".mtgDetail3").value;
    localStorage.setItem("C", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    //var clickeditem = e.target.id;
    var meetDeets = document.querySelector(".mtgDetail4").value;
    localStorage.setItem("D", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    //var clickeditem = e.target.id;
    var meetDeets = document.querySelector(".mtgDetail5").value;
    localStorage.setItem("E", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    //var clickeditem = e.target.id;
    var meetDeets = document.querySelector(".mtgDetail6").value;
    localStorage.setItem("F", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    //var clickeditem = e.target.id;
    var meetDeets = document.querySelector(".mtgDetail7").value;
    localStorage.setItem("G", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    //var clickeditem = e.target.id;
    var meetDeets = document.querySelector(".mtgDetail8").value;
    localStorage.setItem("H", meetDeets);
  } 

  e.stopPropagation();
}

rightColor();
var correctTime = moment().subtract(11, 'hour');
console.log(correctTime);

        var time9 = moment().hour(9).minutes(00).seconds(00);
        var time10 = moment().hour(10).minutes(00).seconds(00);
        var time11 = moment().hour(11).minutes(00).seconds(00);
        var time12 = moment().hour(12).minutes(00).seconds(00);
        var time13 = moment().hour(13).minutes(00).seconds(00);
        var time14 = moment().hour(14).minutes(00).seconds(00);
        var time15 = moment().hour(15).minutes(00).seconds(00);
        var time16 = moment().hour(16).minutes(00).seconds(00);

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

        if (correctTime > time10) {
            $("box10").addClass("past");
        }
        else if (correctTime >= time10 && correctTime < time11) {
            $("box10").addClass("present");
            $("box10").removeClass("past");
        }
        else (correctTime < time10); {
            $("box10").addClass("future");
            $("box10").removeClass("present");
            $("box10").removeClass("past");
        }

        if (correctTime > time11) {
            $("box11").addClass("past");
        }
        else if (correctTime >= time11 && correctTime < time12) {
            $("box11").addClass("present");
            $("box11").removeClass("past");
        }
        else (correctTime < time11); {
            $("box11").addClass("future");
            $("box11").removeClass("present");
            $("box11").removeClass("past");
        }

        if (correctTime > time12) {
            $("box12").addClass("past");
        }
        else if (correctTime >= time12 && correctTime < time13) {
            $("box12").addClass("present");
            $("box12").removeClass("past");
        }
        else (correctTime < time12); {
            $("box12").addClass("future");
            $("box12").removeClass("present");
            $("box12").removeClass("past");
        }

        if (correctTime > time13) {
            $("box13").addClass("past");
        }
        else if (correctTime >= time13 && correctTime < time14) {
            $("box13").addClass("present");
            $("box13").removeClass("past");
        }
        else (correctTime < time13); {
            $("box13").addClass("future");
            $("box13").removeClass("present");
            $("box13").removeClass("past");
        }

        if (correctTime > time14) {
            $("box14").addClass("past");
        }
        else if (correctTime >= time14 && correctTime < time15) {
            $("box14").addClass("present");
            $("box14").removeClass("past");
        }
        else (correctTime < time14); {
            $("box14").addClass("future");
            $("box14").removeClass("present");
            $("box14").removeClass("past");
        }

        if (correctTime > time15) {
            $("box15").addClass("past");
        }
        else if (correctTime >= time15 && correctTime < time16) {
            $("box15").addClass("present");
            $("box15").removeClass("past");
        }
        else (correctTime < time15); {
            $("box15").addClass("future");
            $("box15").removeClass("present");
            $("box15").removeClass("past");
        }

        if (correctTime > time16) {
            $("box16").addClass("past");
        }
        else if (correctTime >= time16 && correctTime < time17) {
            $("box16").addClass("present");
            $("box16").removeClass("past");
        }
        else (correctTime < time16); {
            $("box16").addClass("future");
            $("box16").removeClass("present");
            $("box16").removeClass("past");
        }
}

})

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
