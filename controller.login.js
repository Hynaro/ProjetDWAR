var controller = angular.module('toolate.controller.login', []);

controller.controller('toolate.controller.login', ['$scope', 'GAuth', 'GData', '$state',
    function clientList($scope, GAuth, GData, $state) {
    	if(GData.isLogin()){
    		$state.go('home');
    	}

        $scope.doLogin = function() {
            GAuth.login().then(function(){
            	$state.go('home');
            });
        };
    }
])