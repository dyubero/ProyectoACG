angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  //--------------------------------------------
   $scope.login = function(user) {
			
		if(typeof(user)=='undefined'){
			$scope.showAlert('Por favor, rellene nombre de usuario y contraseña para continuar.');	
			return false;
		}

		if(user.username=='Prueba@gmail.com' && user.password=='demo'){
			$location.path('/app/dashboard');
		}else{
			$scope.showAlert('CONTRASEÑA O USUARIO INVALIDO.');	
		}
		
	};
  //--------------------------------------------
  $scope.logout = function() {   $location.path('/app/login');   };
  //--------------------------------------------
   // An alert dialog
	 $scope.showAlert = function(msg) {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Mensaje de aviso',
		 template: msg
	   });
	 };
  //--------------------------------------------
})

.controller('ProfilesCtrl', function($scope , Profiles) {
    $scope.profiles = Profiles.all();
})

.controller('ProfileCtrl', function($scope, $stateParams , Profiles) {
	$scope.profile = Profiles.get($stateParams.profileId);
})

.controller('DashCtrl', function($scope, $stateParams , Profiles) {
	$scope.profiles = Profiles.all();
});

