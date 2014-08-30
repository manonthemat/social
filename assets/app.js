var app = angular.module('app', []);

app.controller('PostsCtrl', ['$scope', 'PostsService', function($scope, PostsService) {
  PostsService.fetch().success(function(posts) {
    $scope.posts = posts;
  });
  $scope.addPost = function() {
    if ($scope.postBody) {
      PostsService.post({
        username: 'MatzeOne',
        body: $scope.postBody
      }).success(function(post) {
        $scope.posts.unshift(post);
        $scope.postBody = null;
      });
    }
  };
}]);

app.service('PostsService', ['$http', function($http) {
  this.fetch = function() {
    return $http.get('/api/posts');
  };
  this.post = function(obj) {
    return $http.post('/api/posts', obj);
  };
}]);
