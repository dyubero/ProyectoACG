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

.state('app.registroEmpresa', {
    url: '/regstroEmpresa',
    views: {
      'menuContent': {
        templateUrl: 'templates/registroEmpresa.html',
        controller: 'ReEmCtrl'
      }
    },
    authStatus: true
  })

  .state('app.FavoritosUsuario', {
    url: '/FavoritosUsuario',
    views: {
      'menuContent': {
        templateUrl: 'templates/FavoritosUsuario.html',
        controller: 'FavoritosUsuarioCtrl'
      }
   },
	authStatus: false
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
  .state('app.sugerencias', {
    url: '/sugerencias',
    views: {
      'menuContent': {
        templateUrl: 'templates/sugerencias.html',
		controller: 'sugerenciasCtrl'
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

  .state('app.ActividadReciente', {
    url: '/ActividadReciente',
    views: {
      'menuContent': {
        templateUrl: 'templates/ActividadReciente.html',
		controller: 'ActividadRecienteCtrl'
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
    .state('app.VideoDesdeUsuario', {
      url: '/VideoDesdeUsuario',
      views: {
        'menuContent': {
          templateUrl: 'templates/VideoDesdeUsuario.html',
          controller: 'VideoDesdeUsuarioCtrl'
        }
      }
    })
    .state('app.VideoDesdeEmpresa', {
      url: '/VideoDesdeEmpresa',
      views: {
        'menuContent': {
          templateUrl: 'templates/VideoDesdeEmpresa.html',
          controller: 'VideoDesdeEmpresaCtrl'
        }
      }
    })

      .state('app.PruebaTimer', {
      url: '/PruebaTimer',
      views: {
        'menuContent': {
          templateUrl: 'templates/PruebaTimer.html',
          controller: 'PruebaTimerCtrl'
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
  $urlRouterProvider.otherwise('/app/PantallaInicioCandidatos');
});
