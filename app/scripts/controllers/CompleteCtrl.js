(function() {
  function CompleteCtrl($scope, Task) {
    //this.tasks = Task.tasks;
    this.tasks = Task.tasks;
    this.current_time = (new Date()).getTime();
    console.log(this.tasks)
  }

  angular
    .module('blocitoff')
    .controller('CompleteCtrl', ['$scope', 'Task', CompleteCtrl]);
})();
