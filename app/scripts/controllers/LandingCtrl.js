(function() {
  function LandingCtrl($scope, Task) {
    this.tasks = Task.tasks;

    $scope.update = function(task){
      Task.addTask(task);
    };
  }

  angular
    .module('blocitoff')
    .controller('LandingCtrl', ['$scope', 'Task', LandingCtrl]);
})();
