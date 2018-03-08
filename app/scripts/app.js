(function() {
  function config($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('landing', {
      url: '/',
      controller: 'LandingCtrl as landing',
      templateUrl: '/templates/landing.html'
    });
  }
  angular
    .module('blocitoff', ['ui.router', 'firebase'])
    .config(config);
})();
