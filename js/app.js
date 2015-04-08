(function(){
	var app = angular.module('sports', ['football']
    );

    app.controller('SportsControllers', ['$http', function($http){
        var store = this;
        store.sports = [];
        $http.get('js/sports.json').success(function(data){
            store.sports = data;
            console.log(store.sports);
        });
    }]);
})();
