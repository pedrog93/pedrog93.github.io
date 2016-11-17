'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'spotify'
]).
config(['$locationProvider', '$routeProvider','SpotifyProvider', function($locationProvider, $routeProvider, SpotifyProvider) {
  $locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);
  SpotifyProvider.setClientId('1b0e38f85de74486a9f3bb6db1e680dc');
  SpotifyProvider.setRedirectUri('http://localhost:8000/callback/callback.html');
  SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  // If you already have an auth token
  //SpotifyProvider.setAuthToken('BQB0-2552Y6aBt8PBoRVKicnOh5cE2Xnw7gahaASfNJ_qoSxGWe6b_OZhgXWabFdlFD_SqGTFEOsdJrMZucaesaPQz4dpagi3GK075vUcq7H8fwQIxGiNKktW8EmwxnDjN64-Urkq39PojWs0Xg97sxsYpWEDqpze54knHKaW98a8iMSpYOsvc0ax-GYl4CWVo07vxcBf5NJzszWhQPNau-a_jgQAC_zwKexLP5qfOTRefxrawnxIomZAI0_g0fbbOpS');
  $routeProvider.otherwise({redirectTo: '/view1'});

}]);
