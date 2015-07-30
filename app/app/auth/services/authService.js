(function(){

	'use strict';
	/* global Firebase */
    angular.module('rosettaApp')
    .service('authService', ["$rootScope", '$firebaseAuth', function($rootScope, $firebaseAuth) {
	    var ref = new Firebase("https://rosettatasks.firebaseio.com");
		this.auth = $firebaseAuth(ref);
		this.user = this.auth.$getAuth();

		return this;
	}]);

})();