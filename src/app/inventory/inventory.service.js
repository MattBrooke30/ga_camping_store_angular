'use strict';

angular.module('gaCampingStore')
.service('inventoryService', function() {

  var that = this;

  // TODO: eventually we want to fetch the inventory from the server.
  that.inventory = [
    { id :  1, category : 'water bottle', description : 'small water bottle',   price :   2.99, qty : 1 },
    { id :  2, category : 'water bottle', description : 'large water bottle',   price :   3.99, qty : 1, onSale : true },
    { id :  3, category : 'flashlight',   description : 'small flashlight',     price :   6.99, qty : 1 },
    { id :  4, category : 'flashlight',   description : 'big flashlight',       price :  12.99, qty : 1 },
    { id :  5, category : 'stove',        description : 'small stove',          price :  29.99, qty : 1 },
    { id :  6, category : 'stove',        description : 'big stove',            price :  29.99, qty : 1 },
    { id :  7, category : 'sleeping bag', description : 'simple sleeping bag',  price :  49.99, qty : 1 },
    { id :  8, category : 'sleeping bag', description : 'deluxe sleeping bag',  price :  79.99, qty : 1 },
    { id :  9, category : 'tent',         description : '3-person tent',        price : 249.99, qty : 1 },
    { id : 10, category : 'tent',         description : '1-person tent',        price : 119.99, qty : 1 },
    { id : 11, category : 'tent',         description : '2-person tent',        price : 169.99, qty : 1 },
    { id : 12, category : 'tent',         description : '4-person tent',        price : 319.99, qty : 1 }
  ];

});
