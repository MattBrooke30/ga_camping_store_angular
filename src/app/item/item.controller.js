'use strict';

angular.module('gaCampingStore')
  .controller('ItemCtrl', function($state, itemService, cartService) {

    this.searchText = '';
    this.inventory = itemService.inventory;
    this.cart = cartService.cart;

    this.addItem = function(item) {
      cartService.addItem(item);
    };

    this.removeItem = function(item) {
      cartService.removeItem(item);
    };

    this.getCost = function(item) {
      return cartService.getCost(item);
    };

    this.getTotal = function() {
      return cartService.getTotal();
    };

    this.clearCart = function() {
      return cartService.clearCart();
    };

    this.goItem = function (item) {
      console.log('goItem: ' + item.id);
      $state.go( 'itemDetail', { itemId : item.id } );
    };

  });

angular.module('gaCampingStore').
filter('inventory', function() {

  function isMatch(str, pattern) {
    return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
  }

  return function(inventory, searchText) {
    var items = {
        searchText: searchText,
        out: []
    };
    angular.forEach(inventory, function (item) {
      if (isMatch(item.category   , this.searchText) ||
          isMatch(item.name       , this.searchText) ||
          isMatch(item.description, this.searchText) ) {
        this.out.push(item);
      }
    }, items);
    return items.out;
  };
});
