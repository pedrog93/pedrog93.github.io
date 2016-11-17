'use strict';
var app = angular.module('myApp.view1', ['ngRoute','spotify'])


app.config(['$locationProvider','$routeProvider','SpotifyProvider', function($locationProvider,$routeProvider, SpotifyProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
  //$locationProvider.html5Mode(true);
  SpotifyProvider.setClientId('1b0e38f85de74486a9f3bb6db1e680dc');
  SpotifyProvider.setRedirectUri('http://localhost:8000/callback/callback.html');
  SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  //SpotifyProvider.setAuthToken('BQB0-2552Y6aBt8PBoRVKicnOh5cE2Xnw7gahaASfNJ_qoSxGWe6b_OZhgXWabFdlFD_SqGTFEOsdJrMZucaesaPQz4dpagi3GK075vUcq7H8fwQIxGiNKktW8EmwxnDjN64-Urkq39PojWs0Xg97sxsYpWEDqpze54knHKaW98a8iMSpYOsvc0ax-GYl4CWVo07vxcBf5NJzszWhQPNau-a_jgQAC_zwKexLP5qfOTRefxrawnxIomZAI0_g0fbbOpS');

}])

app.controller('View1Ctrl',function(Spotify,$scope) {
 $scope.artists={};
 $scope.artToFind=[];
 var songs="";
 var url2 = 'https://embed.spotify.com/?uri=spotify:trackset:Give me sound:';
 $scope.recomendSeed =[];

 $scope.iniciarSesion=function(){
   Spotify.login();
 }
  $scope.checkArtists = function () {
    angular.forEach($scope.artists, function(artist,key){
      Spotify.search(artist,'artist').then(function(data){
        $scope.artToFind.push(data.artists.items[0].id);
        //console.log(data.artists.items[0].id);
        })

    })

  };
  $scope.getSong = function(artist){
    Spotify.getArtistTopTracks(artist, 'MX').then(function (data) {
        url2+=data.tracks[0].id+","+data.tracks[1].id+",";

    });
  }
  $scope.getRecomended = function(artist){
    //console.log(artist)
      Spotify.getRecommendations({ seed_artists: artist, limit: 3, target_popularity:80 }).then(function (data) {
      //$scope.recomendSeed.push(data.tracks[1].id)
      url2+=data.tracks[1].id+","+data.tracks[2].id+",";
      $('#spotify-iframe').attr('src',url2)
    });
  }
// call the function here or in a ng-click for instance.
});
