'use strict';

// Declare app level module which depends on views, and components
angular.module('webTemplateStore', [
  'ngRoute',
  'webTemplateStore.view1',
  'webTemplateStore.view2',
  'webTemplateStore.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
