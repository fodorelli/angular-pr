(function(){
    var app = angular.module('football', []);

    app.directive("football", function() {
       return {
           restrict: 'E',
           templateUrl: 'inc/football.html',
           controller: function() {

           },
           controllerAs: 'game'
       };
    });
})();