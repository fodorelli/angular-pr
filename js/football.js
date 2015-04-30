(function(){
    var app = angular.module('football', []);

    app.directive("football", function() {
       return {
           restrict: 'E',
           templateUrl: 'inc/football.html',

           controller: function() {
              var $this = this;

              $this.filter = "$";
              $this.search = {$:''};
              $this.changeFilterTo = function(pr) {
                $this.filter = pr;
              }
           },
           controllerAs: 'game'
       };
    });
})();