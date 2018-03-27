(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);
    Task.tasks = tasks;

    Task.addTask = function(task){
      create_time = (new Date()).getTime();
      console.log(create_time)
      tasks.$add({ Description : task.description, Complete : false, Created_at : create_time })
    }

    return Task;
  }

  angular
    .module('blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
