(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);
    Task.tasks = tasks;

    Task.addTask = function(task){
      create_time = (new Date()).getTime();
      if (task.priority == "high"){
        tasks.$add({ Description : task.description, Priority : 2, Complete : false, Created_at : create_time })
      } else if (task.priority == "medium") {
        tasks.$add({ Description : task.description, Priority : 1, Complete : false, Created_at : create_time })
      } else {
        tasks.$add({ Description : task.description, Priority : 0, Complete : false, Created_at : create_time })
      }
    };
    Task.updateTask = function(task) {
      task.Complete = true;
      tasks.$save(task)
    }

    return Task;
  }

  angular
    .module('blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
