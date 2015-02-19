$(document).ready(function() {

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();
    var newList = { listName: inputtedListName, tasks: [] }

    $("ul#lists").append("<li><span class='list-name'>" + newList.listName + "</span></li>");
      $(".list-name").last().click(function() {
        $("#show-lists").show();

        $("#show-lists h4").text(newList.listName);
    });


    $("form#add-new-task").submit(function(event) {
      event.preventDefault();

      var inputtedTaskName = $("input#add-new-task").val()

      $(".new-task").each(function() {
        var newTask = { taskName: inputtedTaskName }
        newList.tasks.push(newTask);
      });


      $("input#new-list-name").val("");
      $("input#add-new-task").val("");

      $("ul#tasks").text("");

      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li><span class='update-task'>" + task.taskName + "</li>");
          $(".update-task").last().click(function() {
            $("#show-tasks").show();
          });
      });
    });

  });
});
