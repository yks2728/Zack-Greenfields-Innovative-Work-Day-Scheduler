// credit to https://github.com/mlportu/workday-scheduler/blob/master/assets/script.js for the array

tasks = [];

// end credit

var task9 = document.getElementById("task-9")
var task10 = document.getElementById("task-10")
var task11 = document.getElementById("task-11")
var task12 = document.getElementById("task-12")
var task13 = document.getElementById("task-13")
var task14 = document.getElementById("task-14")
var task15 = document.getElementById("task-15")
var task16 = document.getElementById("task-16")
var task17 = document.getElementById("task-17")


if (localStorage.getItem("task-9")) {
  task9.textContent = localStorage.getItem("task-9");
}

if (localStorage.getItem("task-10")) {
  task10.textContent = localStorage.getItem("task-10");
}

if (localStorage.getItem("task-11")) {
  task11.textContent = localStorage.getItem("task-11");
}

if (localStorage.getItem("task-12")) {
  task12.textContent = localStorage.getItem("task-12");
}

if (localStorage.getItem("task-13")) {
  task13.textContent = localStorage.getItem("task-13");
}

if (localStorage.getItem("task-14")) {
  task14.textContent = localStorage.getItem("task-14");
}

if (localStorage.getItem("task-15")) {
  task15.textContent = localStorage.getItem("task-15");
}

if (localStorage.getItem("task-16")) {
  task16.textContent = localStorage.getItem("task-16");
}

if (localStorage.getItem("task-17")) {
  task17.textContent = localStorage.getItem("task-17");
}

// credit to https://github.com/mlportu/workday-scheduler/blob/master/assets/script.js for the functions

var Today = moment().format("MMMM D, YYYY");
    $("#currentDay").text(Today);

var hourAudit = function () {
  var currentHour = moment().hour();

  for (var i = 9; i < 18; i++) {
    var taskArea = $("#task-" + i);
    if (currentHour > i) {
      $(taskArea).addClass("past");
    } else if (currentHour === i) {
      $(taskArea).addClass("present");
    } else {
      $(taskArea).addClass("future");
    }
  }
};

// task update with click
$(".taskBin").on("click", "p", function () {
  // get the textareas; current value/text
  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("form-control").val(text);

  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

// // Task needs to be updated
$(".taskBin").on("blur", "textarea", function () {
  // get the text areas; current value/text
  var text = $(this).val().trim();

  var taskP = $("<p>").addClass("taskContent").text(text);

  // replace text area with p element
  $(this).replaceWith(taskP);
});

// end credit

// save tasks
$(".saveBtn").on("click", function (event) {
  var innerText = event.target.parentElement.childNodes[3].innerText
  var eventId = event.target.parentElement.childNodes[3].id
  localStorage.setItem(eventId, JSON.stringify(innerText));
});

// start credit https://github.com/mlportu/workday-scheduler/blob/master/assets/script.js for the function
hourAudit();
// end of credit
