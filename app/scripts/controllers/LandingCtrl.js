(function() {
  function LandingCtrl($scope, Task) {
    this.tasks = Task.tasks;
    this.current_time = (new Date()).getTime();
    $scope.update = function(task){
      Task.addTask(task);
      this.task.description = "";
    };
  }

  angular
    .module('blocitoff')
    .controller('LandingCtrl', ['$scope', 'Task', LandingCtrl]);
})();
