'use strict';

/**
 * @ngdoc directive
 * @name interfaceApp.directive:pagination
 * @description
 * # pagination
 */
angular.module('pohAdminApp')
    .directive('pagination', function () {
        return {
            templateUrl: 'views/template/pagination.html',
            restrict: 'E',
            scope: {
                'pageable':'='
            }
        };
    });
