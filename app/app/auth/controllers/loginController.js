(function(){
	'use strict';
	/* jshint latedef:nofunc */

angular.module('rosettaApp')
	.controller('LoginCtrl', LoginCtrl);
	LoginCtrl.$inject = ['$location', '$scope', '$rootScope','authService'];

	function LoginCtrl($location, $scope, $rootScope, authService){
		var vm = this;

		vm.user = authService.user ? authService.user.password.email : false;

		vm.logout = function() {
			authService.auth.$unauth();
			$location.path('/#/');
		};


		vm.hideNavbar = $location.path() === '/';
		var routes = {
			'/' : true,
			'/login' : true
		};

	   $scope.$watch(function() {
		    return $location.path();
		 }, function(){
			 	vm.hideNavbar = routes[$location.path()] || false;
		 });

		authService.auth.$onAuth(function(authData) {
		  if (authData) {

		  } else {
		  	vm.user = false;
		  }
		});

		vm.email = "";
		vm.password = "";

		vm.signin = function(){
			authService.auth.$authWithPassword({
			  email: vm.email,
			  password: vm.password
			}).then(function(authData) {
			  console.log(authData);
			}).catch(function(error) {
			  console.error("Authentication failed:", error);
			});
		};


		$rootScope.$on("login", function(event, user) {
	        // do login things
	        console.log(event, user);
	        $scope.user = user;
	    });
	    $rootScope.$on("loginError", function(event, error) {
	        // tell the user about the error
	        console.log(event, error);
	    });
	    $rootScope.$on("logout", function(event) {
	        // do logout things
	        console.log(event);
	    });


	    return vm;

	}

})();