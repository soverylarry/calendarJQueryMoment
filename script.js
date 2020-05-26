$(document).ready(function(){
//sets up the current time and day for the Jumbotron display at the top of the page
$("#currentDay").text(moment ().format("[Today's date is: ]dddd, MMMM Do"))
$("#currentTime").text(moment ().format("[The current time is: ]HH:mm"))



//this sets the localStorage with whatever the user enters for a meeting
var theParent = document.querySelector("#tableSave");
theParent.addEventListener("click", buttonStuff, false);

function buttonStuff (e) {
  if (e.target !== e.currentTarget) {
    var meetDeets = document.querySelector(".mtgDetail1").value;
    localStorage.setItem("A", meetDeets);
  } 

   if (e.target !== e.currentTarget) {
    var meetDeets = document.querySelector(".mtgDetail2").value;
    localStorage.setItem("B", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    var meetDeets = document.querySelector(".mtgDetail3").value;
    localStorage.setItem("C", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    var meetDeets = document.querySelector(".mtgDetail4").value;
    localStorage.setItem("D", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    var meetDeets = document.querySelector(".mtgDetail5").value;
    localStorage.setItem("E", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    var meetDeets = document.querySelector(".mtgDetail6").value;
    localStorage.setItem("F", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    var meetDeets = document.querySelector(".mtgDetail7").value;
    localStorage.setItem("G", meetDeets);
  } 

  if (e.target !== e.currentTarget) {
    var meetDeets = document.querySelector(".mtgDetail8").value;
    localStorage.setItem("H", meetDeets);
  } 

  e.stopPropagation();

}




//this code retreives local storage to display content in text area
let myContentA = localStorage.getItem("A");
document.querySelector(".box9").innerHTML= myContentA;
console.log(myContentA);

let myContentB = localStorage.getItem("B");
document.querySelector(".box10").innerHTML= myContentB;
console.log(myContentB);

let myContentC = localStorage.getItem("C");
document.querySelector(".box11").innerHTML= myContentC;
console.log(myContentC);

let myContentD = localStorage.getItem("D");
document.querySelector(".box12").innerHTML= myContentD;
console.log(myContentD);

let myContentE = localStorage.getItem("E");
document.querySelector(".box13").innerHTML= myContentE;
console.log(myContentE);

let myContentF = localStorage.getItem("F");
document.querySelector(".box14").innerHTML= myContentF;
console.log(myContentF);

let myContentG = localStorage.getItem("G");
document.querySelector(".box15").innerHTML= myContentG;
console.log(myContentG);

let myContentH = localStorage.getItem("H");
document.querySelector(".box16").innerHTML= myContentH;
console.log(myContentH);



//code to colorize 'past', 'present', and 'future' time slots according to current time.


var correctTime = new Date();
        var time9 = moment().hour(9).minutes(00).seconds(00);
        var time10 = moment().hour(10).minutes(00).seconds(00);
        var time11 = moment().hour(11).minutes(00).seconds(00);
        var time12 = moment().hour(12).minutes(00).seconds(00);
        var time13 = moment().hour(13).minutes(00).seconds(00);
        var time14 = moment().hour(14).minutes(00).seconds(00);
        var time15 = moment().hour(15).minutes(00).seconds(00);
        var time16 = moment().hour(16).minutes(00).seconds(00);
        
        console.log(correctTime);
        
        function rightColor() {
        
        if (correctTime > time9) {
            $(".box9").addClass("past");
        }
        else if (correctTime >= time9 && correctTime < time10) {
            $(".box9").addClass("present");
            $(".box9").removeClass("past");
        }
        else if(correctTime < time9) {
            $(".box9").addClass("future");
            $(".box9").removeClass("present");
            $(".box9").removeClass("past");
        }

        if (correctTime > time10) {
            $(".box10").addClass("past");
        }
        else if (correctTime >= time10 && correctTime < time11) {
            $(".box10").addClass("present");
            $(".box10").removeClass("past");
        }
        else if (correctTime < time10) {
            $(".box10").addClass("future");
            $(".box10").removeClass("present");
            $(".box10").removeClass("past");
        }

        if (correctTime > time11) {
            $(".box11").addClass("past");
        }
        else if (correctTime >= time11 && correctTime < time12) {
            $(".box11").addClass("present");
            $(".box11").removeClass("past");
        }
        else if(correctTime < time11) {
            $(".box11").addClass("future");
            $(".box11").removeClass("present");
            $(".box11").removeClass("past");
        }

        if (correctTime > time12) {
            $(".box12").addClass("past");
        }
        else if (correctTime >= time12 && correctTime < time13) {
            $(".box12").addClass("present");
            $(".box12").removeClass("past");
        }
        else if(correctTime < time12) {
            $(".box12").addClass("future");
            $(".box12").removeClass("present");
            $(".box12").removeClass("past");
        }

        if (correctTime > time13) {
            $(".box13").addClass("past");
        }
        else if (correctTime >= time13 && correctTime < time14) {
            $(".box13").addClass("present");
            $(".box13").removeClass("past");
        }
        else if (correctTime < time13) {
            $(".box13").addClass("future");
            $(".box13").removeClass("present");
            $(".box13").removeClass("past");
        }

        if (correctTime > time14) {
            $(".box14").addClass("past");
        }
        else if (correctTime >= time14 && correctTime < time15) {
            $(".box14").addClass("present");
            $(".box14").removeClass("past");
        }
        else if (correctTime < time14) {
            $(".box14").addClass("future");
            $(".box14").removeClass("present");
            $(".box14").removeClass("past");
        }

        if (correctTime > time15) {
            $(".box15").addClass("past");
        }
        else if (correctTime >= time15 && correctTime < time16) {
            $(".box15").addClass("present");
            $(".box15").removeClass("past");
        }
        else if (correctTime < time15) {
            $(".box15").addClass("future");
            $(".box15").removeClass("present");
            $(".box15").removeClass("past");
        }

        if (correctTime > time16) {
            $(".box16").addClass("past");
        }
        else if (correctTime >= time16 && correctTime < time17) {
            $(".box16").addClass("present");
            $(".box16").removeClass("past");
        }
        else if (correctTime < time16) {
            $(".box16").addClass("future");
            $(".box16").removeClass("present");
            $(".box16").removeClass("past");
        }
        
}
rightColor();
})

