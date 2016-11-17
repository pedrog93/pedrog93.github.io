'use strict';

angular.module('myApp.callback', ['ngRoute','spotify'])

.config(['$locationProvider','$routeProvider','SpotifyProvider', function($locationProvider,$routeProvider,SpotifyProvider) {
  $routeProvider.when('/callback', {
    templateUrl: 'callback/callback.html',
    controller: 'callbackCtrl'
  });
  $locationProvider.html5Mode(true);
  SpotifyProvider.setClientId('1b0e38f85de74486a9f3bb6db1e680dc');
  SpotifyProvider.setRedirectUri('http://localhost:8000/callback/');
  SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  SpotifyProvider.setAuthToken('BQB0-2552Y6aBt8PBoRVKicnOh5cE2Xnw7gahaASfNJ_qoSxGWe6b_OZhgXWabFdlFD_SqGTFEOsdJrMZucaesaPQz4dpagi3GK075vUcq7H8fwQIxGiNKktW8EmwxnDjN64-Urkq39PojWs0Xg97sxsYpWEDqpze54knHKaW98a8iMSpYOsvc0ax-GYl4CWVo07vxcBf5NJzszWhQPNau-a_jgQAC_zwKexLP5qfOTRefxrawnxIomZAI0_g0fbbOpS');

}])

.controller('callback2Ctrl', [function() {

}]);
