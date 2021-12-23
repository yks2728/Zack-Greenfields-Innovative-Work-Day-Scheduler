// credit to https://github.com/mlportu/workday-scheduler/blob/master/assets/script.js for the function
// color code hours

tasks = [];

// load tasks
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem)("tasks")
    if (!tasks) {
        tasks = {}
    } ;
    printTasks(tasks)
}

var printTasks = function() {
    $.each(tasks, function(list, arr) {
        var taskP = $("<p>").addClass("description task-content-" + list).text(arr)

        $("task-content-" + list).replaceWith(taskP);
    })
}

var Today = (moment().format("MMMM D, YYYY"))
    $("#currentDay").text(Today);


var hourAudit = function() {
    var currentHour= moment().hour()

    for (var i = 9; i < 19; i++); {
        var taskArea = $("#task-"+ i)
        if (currentHour > i) {
            $(taskArea).addClass("past");
        } else if (currentHour === i) {
            $(taskArea).addClass("present");
        } else {
            $(taskArea).addClass("future");
        }
    }
}