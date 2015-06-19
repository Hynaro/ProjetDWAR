var app = angular.module('toolate', [

    'ui.router',
    'angular-google-gapi',
    'toolate.router',
    'toolate.controller',

]);

app.run(['GAuth', 'GApi', '$state', '$rootScope', '$window',
    function(GAuth, GApi, $state, $rootScope, $window) {

        var CLIENT = '99065191357-uukr682djpf26e2e564kr5eaqisv81l3.apps.googleusercontent.com';
        var BASE = 'https://1-dot-starry-sunup-866.appspot.com/_ah/api';

        GApi.load('myContactApi', 'v1', BASE);
        GAuth.setClient(CLIENT);
        GAuth.setScope('https://www.googleapis.com/auth/userinfo.email');
        GAuth.checkAuth().then(
            function () {
                if($state.includes('index'))
                    $state.go('home');
            },
            function() {
                $state.go('index');
            }
        );

        $rootScope.logout = function() {
            GAuth.logout().then(
            function () {
                $state.go('index');
            });
        };
    }
]);