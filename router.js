var router = angular.module('toolate.router', []);

router
    .config(['$urlRouterProvider',
        function($urlRouterProvider) {

            $urlRouterProvider.otherwise("/index");

        }]);

router
    .config(['$stateProvider',
        function($stateProvider) {

            $stateProvider

                .state('index', {
                    url :'/index',
                    views :  {
                        '': {
                            templateUrl: 'index.html',
                        },
                    },
                })

                .state('home', {
                    url :'/home',
                    views :  {
                        '': {
                            templateUrl: 'generic.html',
                        },
                    },
                })

    }])