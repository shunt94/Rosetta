(function(){
	'use strict';
angular.module('rosettaApp')
    .controller('NavbarCtrl', ['$location', 'authService', function($location, authService){
		var vm = this;
		vm.user = authService.user ? authService.user.password.email : false;

		vm.logout = function() {
			authService.auth.$unauth();
			$location.path('/#/');
		};
		console.log("ASD");
		console.log($location.path());
		vm.showNavbar = $location.path() === '/';


		authService.auth.$onAuth(function(authData) {
		  if (authData) {
		  	console.log(authData);
		  } else {
		  	vm.user = false;
		  }
		});

		return vm;
    }]);
})();