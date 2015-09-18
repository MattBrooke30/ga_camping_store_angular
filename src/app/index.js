'use strict';

angular.module('gaCampingStore',
               ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('items', {
        url: '/items',
        templateUrl: 'app/item/index.html',
        controller: 'ItemCtrl as ctrl'
      })
      .state('itemDetail', {
        url: '/items/:itemId',
        templateUrl: 'app/item/show.html',
        controller: 'ItemShowCtrl as ctrl',
        onEnter: function() {
          console.log('Arriving');
        },
        onExit: function() {
          console.log('Leaving');
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/index.html',
        controller: 'AboutCtrl as ctrl'
      });

    $urlRouterProvider.otherwise('/items');
  })
  .run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });
