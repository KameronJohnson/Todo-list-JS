var thisList = {}

$(document).ready(function() {

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();
    var newList = { listName: inputtedListName, tasks: [] }

    $("input#new-list-name").val("");

    $("ul#lists").append("<li><span class='list-name'>" + newList.listName + "</span></li>");

    $(".list-name").last().click(function() {

      $("#show-lists").show();
      $("#show-lists h4").text(newList.listName);


      $("ul#tasks").text("");
      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li><span class= 'update-task'>" + task.taskName + "</span></li>")
      });


      $("form#add-new-task").off("submit")
      $("form#add-new-task").on("submit", function(event) {
        event.preventDefault();

        var inputtedTaskName = $("input#add-new-task").val()

        $(".new-task").each(function() {
          var newTask = { taskName: inputtedTaskName }
          newList.tasks.push(newTask);
        });

        $("input#add-new-task").val("");

        $("ul#tasks").text("");

        newList.tasks.forEach(function(task) {
          $("ul#tasks").append("<li><span class='update-task'>" + task.taskName + "</span></li>");
            $(".update-task").last().click(function() {
              $("#show-tasks").show();
            });
        });
      });

    });
  });
});
