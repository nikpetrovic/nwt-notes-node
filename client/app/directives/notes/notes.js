'use strict';

angular
		.module('nwtNotesApp')
		.directive(
				'nwtnNotes',
				function() {

					return {
						restrict : 'A',
						templateUrl : 'app/directives/notes/notes.html',
						controller : function($scope, $http) {
							$scope.panels = [
									{
										"title" : "Note #1",
										"body" : "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
									},
									{
										"title" : "Note #2",
										"body" : "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
									},
									{
										"title" : "Note #3",
										"body" : "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade."
									} ];

							$scope.selectedPanels = [ 0, 1, 2, 3 ];
						}
					}
				});