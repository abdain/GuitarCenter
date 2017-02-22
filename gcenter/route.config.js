app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/home');
    
$stateProvider


       .state('home', {
           url: '/home',
           templateUrl: 'home.html',
           controller:'maincontroller'
       })


      
       .state('slider', {
url: '/slider',
templateUrl: 'slider.html',
controller:'slidercontroller'
       })

}]);
