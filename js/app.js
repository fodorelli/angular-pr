(function(){
	var app = angular.module('sports', ['football']);

    app.controller('SportsControllers', ['$http', function($http){
        var football = this;
        football.sports = [];
        $http.get('js/sports.json').success(function(data){
            football.sports = data;
            console.log(data[0]);
        });
    }]);
})();
