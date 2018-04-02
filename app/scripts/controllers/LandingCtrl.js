(function() {
  function LandingCtrl($scope, Task) {
    this.tasks = Task.tasks;
    this.current_time = (new Date()).getTime();
    $scope.add = function(task){
      Task.addTask(task);
      this.task.description = "";
    };
    $scope.update = function(task){
      Task.updateTask(task);
    };
  }

  angular
    .module('blocitoff')
    .controller('LandingCtrl', ['$scope', 'Task', LandingCtrl]);
})();
