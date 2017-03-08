$( document ).ready(function() {
  var app = angular.module('myModule', []);
  // This is declaring a module. More on this in a moment

  app.controller('SimpleController', function($scope){

    $scope.listItems = ['Walk the Dog', 'Get Groceries'];

    $scope. addItem = function(){
      $scope.listItems.push($scope.newItem)
      $scope.newItem = ''


    }


  });
});
