// Code goes here

    angular.module('toolate',['angular-google-gapi']).controller('Controller', ['$scope', function($scope) {
      $scope.checkboxModel = {
       concert : false,
       cinema : false,
       theatre : false,
       spectacle : false,
       exposition : false,
       musee : false,
       visite : false,
       projection : false,
       film : false,
       };
      }]);
    
    var controller = angular.module('angular-google-api-example.controller.login', []);

    controller.controller('angular-google-api-example.controller.login', ['$scope', 'GAuth', 'GData', '$state',
        function clientList($scope, GAuth, GData, $state) {
        	if(GData.isLogin()){
        		$state.go('generic');
        	}

            $scope.doLogin = function() {
                GAuth.login().then(function(){
                	$state.go('home');
                });
            };
        }
    ])
    
  app.run(['GApi', 'GAuth',
    function(GApi, GAuth) {
        var BASE = 'https://myGoogleAppEngine.appspot.com/_ah/api';
        GAuth.setScope("https://www.googleapis.com/auth/userinfo.email");
    }
]);