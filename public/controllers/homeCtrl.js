 (function() {
  'use strict';
  angular.module('stamplay')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay","$location","$anchorScroll"];

  function homeCtrl(homeFactory, $state, $http, $scope, $stamplay, $location, $anchorScroll){

   $scope.message = "hello";

  //CLOSING BRACKETS
  }
  })();