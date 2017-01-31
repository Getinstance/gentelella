'use strict';

angular.module('pohAdminApp')
    .directive('calendario', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                model: '=',
                required: '@',
                disabled: '=?'
            },
            controller: function($scope) {

                $scope.myDisabled = function() {
                    return false;
                };

                $scope.disabled = $scope.disabled || $scope.myDisabled;

                $scope.dateOptions = {
                    dateDisabled: $scope.disabled,
                    maxDate: new Date(2099, 12, 31),
                    minDate: new Date(2016, 1, 1),
                    startingDay: 1,
                    showWeeks: false
                };

                $scope.options = {
                    timezone : null
                };

                $scope.format = 'dd/MM/yyyy';

                $scope.popup = {
                    opened: false
                };

                $scope.openPopup = function() {
                    $scope.popup.opened = true;
                };
            },
            template: '' +
            '<p class="input-group">' +
            '  <input type="text" class="form-control" uib-datepicker-popup="{{format}}" ng-model="model" is-open="popup.opened" datepicker-options="dateOptions" ng-required="required" clear-text="Limpar" current-text="Hoje" close-text="Fechar" ng-model-options="options"/>' +
            '      <span class="input-group-btn">' +
            '         <button type="button" class="btn btn-default" ng-click="openPopup()">' +
            '            <i class="glyphicon glyphicon-calendar"></i>' +
            '         </button>' +
            '      </span>' +
            '</p>',
            compile: function(element, attrs, linker) {
                return function(scope, element) {
                    linker(scope, function(clone) {
                        element.append(clone);
                    });
                };
            }
        };
    });