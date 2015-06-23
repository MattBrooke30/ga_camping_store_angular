'use strict';

angular.module('gaCampingStore')
.controller('ItemShowCtrl', function($stateParams, itemService) {
  console.log('ItemShowCtrl is alive!');
  var id = $stateParams.itemId;
  console.log('id: ' + id);
  this.item = itemService.findItemById(id);
  console.log('item: ' + this.item.name);
});
