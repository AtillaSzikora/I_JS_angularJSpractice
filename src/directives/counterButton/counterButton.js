app.directive('counterButton', ['nameCardCtrl', function (nameCardCtrl) {
    return {
        templateUrl: 'directives/counterButton/counterButton.html',
        controller: nameCardCtrl,
        controllerAs: 'nc'
    };
}]);