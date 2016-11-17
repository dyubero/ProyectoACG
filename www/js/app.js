// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js



angular.module('starter', ['ionic', 'starter.controllers' , 'starter.services'])

.run(function($ionicPlatform , $rootScope, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  
  
  
  
  
  
  
  

     $rootScope.authStatus = false;
	 //stateChange event
	  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
		  $rootScope.authStatus = toState.authStatus;
		  if($rootScope.authStatus){
			  
			
		  }
    });

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		console.log("URL : "+toState.url);
		if(toState.url=='/login'){
			console.log("match : "+toState.url);
			$timeout(function(){
				angular.element(document.querySelector('#leftMenu' )).removeClass("hide");
			},1000);
		}	
	});
        
})




.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

//--------------------------------------

 .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-signin.html',
        controller: 'singinCtrl'
      }
    },
	authStatus: false
  })
  
 .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-signup.html',
        controller: 'singupCtrl'
      }
   },
	authStatus: false
  })
//--------------------------------------

.state('app.menu', {
    url: '/menu',
    views: {
      'menuContent': {
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      }
    },
    authStatus: true
  })

.state('app.PantallaInicioCandidatos', {
    url: '/PantallaInicioCandidatos',
    views: {
      'menuContent': {
        templateUrl: 'templates/PantallaInicioCandidatos.html',
        controller: 'PantallaInicioCandidatosCtrl'
      }
    },
    authStatus: true
  })

.state('app.area', {
    url: '/area',
    views: {
      'menuContent': {
        templateUrl: 'templates/area.html',
        controller: 'AreaCtrl'
      }
    },
    authStatus: true
  })


  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
		controller: 'DashCtrl'
      }
     },
	 authStatus: true
  })

   .state('app.perfilEmpresa', {
    url: '/perfilEmpresa',
    views: {
      'menuContent': {
        templateUrl: 'templates/perfilEmpresa.html',
		controller: 'perfilEmpresaCtrl'
      }
     },
	 authStatus: true
  })


  .state('app.ajustes', {
    url: '/ajustes',
    views: {
      'menuContent': {
        templateUrl: 'templates/ajustes.html',
		controller: 'AjustesCtrl'
      }
     },
	 authStatus: true
  })

   .state('app.ofertas', {
    url: '/ofertas',
    views: {
      'menuContent': {
        templateUrl: 'templates/ofertas.html',
		controller: 'OfertasCtrl'
      }
     },
	 authStatus: true
  })

   .state('app.buscador', {
    url: '/buscador',
    views: {
      'menuContent': {
        templateUrl: 'templates/buscador.html',
		controller: 'BuscadorCtrl'
      }
     },
	 authStatus: true
  })

  .state('app.TestArea2', {
    url: '/TestArea2',
    views: {
      'menuContent': {
        templateUrl: 'templates/TestArea2.html',
		controller: 'testArea2Ctrl'
      }
     },
	 authStatus: true
  })

 .state('app.trabajadores', {
    url: '/trabajadores',
    views: {
      'menuContent': {
        templateUrl: 'templates/trabajadores.html',
		controller: 'TrabajadoresCtrl'
      }
     },
	 authStatus: true
  })



    .state('app.profiles', {
      url: '/profiles',
      views: {
        'menuContent': {
          templateUrl: 'templates/profiles.html',
          controller: 'ProfilesCtrl'
        }
      }
    })

  .state('app.profile', {
    url: '/profile/:profileId',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile-detail.html',
        controller: 'ProfileCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/area');
});
