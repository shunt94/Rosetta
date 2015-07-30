(function(){
	'use strict';
	/* jshint latedef:nofunc */

angular.module('rosettaApp')
	.controller('ProjectsCtrl', projectsCtrl);


	function projectsCtrl() {

		var vm = this; // jshint ignore:line

		vm.projects = [
			{name: "test Project", id:1},
			{name: "Website", id:2}
		];

		vm.addProject = function() {

		};

		return vm;
	}

})();