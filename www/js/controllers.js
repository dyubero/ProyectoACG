





angular.module('starter.controllers', ['ngStorage'])

    .controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout, $location, $ionicPopup){



        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};
  
  
   
        //--------------------------------------------
       


        
    $scope.showPopup = function() {
  $scope.data = {};


    
  
    }


    
    
        //--------------------------------------------
        $scope.logout = function () { $location.path('/app/PantallaInicioCandidatos'); };
        //--------------------------------------------
        // An alert dialog
        $scope.showAlert = function (msg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Mensaje de aviso',
                template: msg
            });
        };
        //--------------------------------------------
    })



    .controller('ProfilesCtrl', function ($scope, Profiles) {
        $scope.profiles = Profiles.all();
    })

    .controller('ProfileCtrl', function ($scope, $stateParams, Profiles) {
        $scope.profile = Profiles.get($stateParams.profileId);
    })


.controller('AreaCtrl', function($scope,Profiles,$http) {
   $http.get('http://localHost:8080/PhpACGFiles/testArea.php')
    .then(function (response) {$scope.names = response.data.records;});


})

    .controller('DashCtrl', function ($scope, $state,Profiles) {

 $scope.dashboard = Profiles.all();

        $scope.goToAjustes = function(){
$state.go('app.ajustes')
        }
    })

    .controller('singinCtrl', function ($scope, $http,$state) {
        
        $scope.data = {}
        $scope.LogInCheck = function () {

           //$state.go('app.ajustes');
            


            
        var link2 = 'http://localHost:8080/PhpACGFiles/checkLog.php';
      //  if(($scope.data.usernamelog != null && $scope.data.usernamelog != "") && ($scope.data.passwordlog != null && $scope.data.passwordlog != "")){
            $http.post(link2, {"usernamelog": $scope.data.usernamelog, "passwordlog": $scope.data.passwordlog}).then(function(res){
                $scope.response2 = res.data;
                
                });
            
         //   }
      


        };

        })

       

       


    .controller('singupCtrl', function ($scope, $http) {
        $scope.showFormUser = true;
        $scope.showFormEmpresa = false;
   
        //funcion para mostrar el formulario de usuario al pulsar boton
        $scope.showForm1 = function () {
            $scope.showFormUser = true;
            $scope.showFormEmpresa = false;
        };
    
        //funcion para mostrar el formulario de empresa al pulsar boton
        $scope.showForm2 = function () {
            $scope.showFormUser = false;
            $scope.showFormEmpresa = true;
        };
        
        


        $scope.data = {};
        $scope.submit = function () {
            var link = 'http://localHost:8080/PhpACGFiles/api.php';
            if (($scope.data.username != null && $scope.data.username != "") && ($scope.data.userPassw != null && $scope.data.userPassw != "") && 
            ($scope.data.userApellido != null && $scope.data.userApellido != "") && ($scope.data.userEmail != null && $scope.data.userEmail != "") 
            && ($scope.data.genre != null && $scope.data.genre != "") && ($scope.data.userPasswRepeat != null && $scope.data.userPasswRepeat != "")) {
                if ($scope.data.userPassw == $scope.data.userPasswRepeat) {
                    $http.post(link, { "username": $scope.data.username, "userPassw": $scope.data.userPassw, "userApellido": $scope.data.userApellido,
                                       "userEmail": $scope.data.userEmail, "genre": $scope.data.genre }).then(function (res) {
                        $scope.response = res.data;
                        alert("envia json");
                    });

                    alert("entraenJson");
                } else {
                    alert("No son iguales las contraseñas");
                }
            } else {
                alert("yupiyapaaa");
            }
        };
    })





.controller('perfilEmpresaCtrl', function($scope,$ionicLoading) {

})


     
.controller('testArea2Ctrl', function($scope,$localStorage){
        $scope.$storage = $localStorage.$default({
          x: 42
        });
      })

.controller('AjustesCtrl', function($scope) {

})

.controller('OfertasCtrl', function($scope,$ionicLoading) {
$ionicLoading.show({
    template: '<ion-spinner icon="lines" class="spinner-positive"></ion-spinner>',
    duration: 4000


})
})

.controller('BuscadorCtrl', function($scope) {
$scope.showSearchFilters = false;

$scope.MostrarFiltroPersona = function (){
    if($scope.showSearchFilters != true){
        $scope.showSearchFilters = true;
    }else{
        $scope.showSearchFilters = false;
    }
}
})

.controller('TrabajadoresCtrl', function($scope) {

})

 

 .controller('PantallaInicioCandidatosCtrl', function ($scope, $stateParams,$state, Profiles) {
        
$scope.comenzarApp = function(){
    $state.go('app.login');
    
}

    });




