var blogApp = angular.module('sam-stiles-blog', ['ngRoute', 'ngAnimate']);

blogApp.controller('HomeController', function($scope, posts){

  console.log(JSON.stringify(posts, null, 2));

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
      "posts": function($http, $location){
        return $http.get("/blogpost?limit=5")
        .then(function(successResponse){
          console.log('Got data successfully!');

          successResponse.data.forEach(function(post){
            post.createdAt = post.createdAt.substring(0, post.createdAt.length - 5) + 'Z';
            post.summary = post.content.substring(0, post.content.indexOf('</p>') -1 );
          });

          return successResponse.data;
        }, function(errorResponse){
          console.log('Error!');
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