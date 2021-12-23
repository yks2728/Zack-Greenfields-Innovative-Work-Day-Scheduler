// credit to https://github.com/mlportu/workday-scheduler/blob/master/assets/script.js for the functions

tasks = [];

// load tasks
var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem("tasks"))
  if (!tasks) {
    tasks = {};
  };
  printTasks(tasks);
}

var printTasks = function () {
  $.each(tasks, function(list, arr) {
    var taskP = $("<p>").addClass("description task-content-" + list).text(arr);

    $("task-content-" + list).replaceWith(taskP);
  })
}

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
      $(taskArea).addClass("future")
    }
  }
}

// task update with click
$(".taskBin").on("click", "p", function () {
  // get the textareas; current value/text
  var text = $(this)
        .text()
        .trim();
  var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);

  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

// Task needs to be updated
$(".taskBin").on("blur", "textarea", function() {
  // get the text areas; current value/text
  var taskP = $("<p>")
        .addClass("taskContent")
        .text(text);

  // replace text area with p element
  $(this).replaceWith(taskP);
});

// save tasks
$(".saveBtn").on("click", function() {
  var index = $("saveBtn").index(this);
  tasks[index] = $(this).parent().find(".taskContent").text();
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

setInterval(function () {
  hourAudit();
}, 1000 * 60 * 60);

loadTasks();
hourAudit();
// end of credit
