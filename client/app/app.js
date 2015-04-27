'use strict';

angular.module('nwtNotesApp', [ 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'mgcrea.ngStrap' ])
		.config(function($routeProvider, $locationProvider, $httpProvider) {
			$routeProvider.otherwise({
				redirectTo : '/'
			});

			$locationProvider.html5Mode(true);
			$httpProvider.interceptors.push('authInterceptor');
		})

		.factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
			return {
				// Add authorization token to headers
				request : function(config) {
					config.headers = config.headers || {};
					if ($cookieStore.get('token')) {
						config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
					}
					return config;
				},

				response : function(response) {

					return response;
				},

				// Intercept 401s and redirect you to login
				responseError : function(response) {
					if (response.status === 401) {
						$location.path('/login');
						// remove any stale tokens
						$cookieStore.remove('token');
						return $q.reject(response);
					} else {
						return $q.reject(response);
					}
				}
			};
		})

		.run(function($rootScope, $location, Auth) {
			$rootScope.$on("$locationChangeStart", function(event, nextUrl, currentUrl) {
				console.log("nextUrl: " + nextUrl + ', currentUrl: ' + currentUrl);
				if (Auth.isLoggedIn() || currentUrl.indexOf("/login") > -1) {
					Auth.isLoggedInAsync(function(loggedIn) {
						if (!loggedIn) {
							$location.path('/login');
						} else {
							$location.path('/');
						}
					});
				} else {
					$location.path('/login');
				}
			});
		});