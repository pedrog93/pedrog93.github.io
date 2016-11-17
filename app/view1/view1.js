'use strict';
var app = angular.module('myApp.view1', ['spotify'])


app.config(['$routeProvider','SpotifyProvider', function($routeProvider, SpotifyProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
  SpotifyProvider.setClientId('1b0e38f85de74486a9f3bb6db1e680dc');
  SpotifyProvider.setRedirectUri('http://localhost:8000/callback/');
  SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  SpotifyProvider.setAuthToken('BQB0-2552Y6aBt8PBoRVKicnOh5cE2Xnw7gahaASfNJ_qoSxGWe6b_OZhgXWabFdlFD_SqGTFEOsdJrMZucaesaPQz4dpagi3GK075vUcq7H8fwQIxGiNKktW8EmwxnDjN64-Urkq39PojWs0Xg97sxsYpWEDqpze54knHKaW98a8iMSpYOsvc0ax-GYl4CWVo07vxcBf5NJzszWhQPNau-a_jgQAC_zwKexLP5qfOTRefxrawnxIomZAI0_g0fbbOpS');

}])

app.controller('View1Ctrl',function(Spotify,$scope) {
 $scope.artists={};
 $scope.artToFind=[];
 var songs="";
 var url2 = 'https://embed.spotify.com/?uri=spotify:trackset:Give me sound:';
 $scope.iniciarSesion=function(){
   Spotify.login();
 }
  $scope.checkArtists = function () {
    angular.forEach($scope.artists, function(artist,key){
      Spotify.search(artist,'artist').then(function(data){
        $scope.artToFind.push(data.artists.items[0].id);
        })
    })
      Spotify.getRecommendations({ seed_artists: $scope.artToFind }).then(function (data) {
      console.log(data);
    });
  };
  $scope.getSong = function(artist){
    Spotify.getArtistTopTracks(artist, 'MX').then(function (data) {
        url2+=data.tracks[0].id+","+data.tracks[1].id+",";
        $('#spotify-iframe').attr('src',url2)
        console.log(url2);
    });
  }
// call the function here or in a ng-click for instance.
});
