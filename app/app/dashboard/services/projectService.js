(function(){
	'use strict';

angular.module('rosettaApp')
	.service('Projects', ['$resource', function($resource) {

		return $resource;
	}]);

})();