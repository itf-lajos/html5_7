// Egyedi azonosító.
var userId = "user_75654356";

// Létrehozunk egy új angular modult.
var testModule = angular.module("testModule", []);

// Űrlap kontroller létrehozása.
testModule.controller( "formController", function( $scope, $http ) {
    
    // User objektum
    $scope.user = {};
    
    // Meglévő adatok lekérése.
    $http.get( "http://37.139.16.100:3000/" + userId )
        .success( function(data) {
            $scope.user = data;
        } )
        .error( function(error) {
            console.error( "Hiba a lekérés során:" , error );
        } );
    
    // Adatok mentése.
    $scope.proccessForm = function() {
        // Objektum, amit elküldünk a szerverre.
        var serverObj = {
        "user": userId,
        "data": $scope.user
        };
        // Adatok küldése a szerverre.
        $http.post( "http://37.139.16.100:3000", serverObj )
            .success( function(data) {
                console.log( "A szerver válasza: ", data);
            } )
            .error( function(error) {
                console.error( "Hiba a lekérés során:" , error );
            } );
        
    }
    //    $scope.user.username = "Pistike";
    
} );