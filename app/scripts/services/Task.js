(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);
    Task.tasks = tasks;

    Task.addTask = function(task){
      tasks.$add({ Description : task.description })
    }

    return Task;
  }

  angular
    .module('blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
