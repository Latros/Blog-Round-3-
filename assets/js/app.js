var blogApp = angular.module('sam-stiles-blog', ['ui.utils']);

blogApp.controller('HomeController', function($scope, posts){

  console.log(posts);

  $scope.state = {};
  window.scope = $scope;
  $scope.state.posts = posts;

});

blogApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'/templates/home.html',
    controller: 'HomeController',
    resolve: {
      "posts": function($http, $rootScope, $location){
        return $http.get("/blogpost?limit=5")
        .then(function(successResponse){
          return successResponse;
        }, function(errorResponse){
          return $location.path('/error');
        });
      }
    }
  })
  .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(false);
});

blogApp.directive('', function(){
  return {
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // templateUrl: '',
    link: function($scope, element, attributes) {
    }
  };
});