'use strict';

angular.module('gaCampingStore')
  .controller('MainCtrl', function(inventoryService, cartService) {

    this.searchText = '';
    this.inventory = inventoryService.inventory;
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

  });
