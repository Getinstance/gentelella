'use strict';

/**
 * @ngdoc function
 * @name interfaceApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the interfaceApp
 */
angular.module('pohAdminApp')
    .controller('HomeCtrl', function ($rootScope) {

        var me = this;

        $rootScope.main = {
            title: "Item 1"
        };

        me.menuItems = [{
            sref:"#/item1",
            icon:"fa-tachometer",
            name:"Item 1"
        },{
            sref:"#/item2",
            icon:"fa-key",
            name:"Item 2"
        },{
            sref:"#/item3",
            icon:"fa-exchange",
            name:"Item 3"
        },{
            sref:"#/item4",
            icon:"fa-download",
            name:"Item 4"
        },{
            sref:"#/item5",
            icon:"fa-upload",
            name:"Item 5"
        }];
    });
