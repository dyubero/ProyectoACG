angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout, $location, $ionicPopup) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};
  
  
   
        //--------------------------------------------
        $scope.login = function (user) {

            if (typeof (user) == 'undefined') {
                $scope.showAlert('Por favor, rellene nombre de usuario y contraseña para continuar.');
                return false;
            }

            if (user.username == 'Prueba@gmail.com' && user.password == 'demo') {
                $location.path('/app/area');
            } else {
                $scope.showAlert('CONTRASEÑA O USUARIO INVALIDO.');
            }

        };
    
    
  
  


    
    
        //--------------------------------------------
        $scope.logout = function () { $location.path('/app/login'); };
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



    .controller('DashCtrl', function ($scope, $stateParams, Profiles) {
        $scope.profiles = Profiles.all();
    })

    .controller('singinCtrl', function ($scope, $stateParams, Profiles) {
        $scope.profiles = Profiles.all();
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
            var link = 'http://localHost:8080/PHPFilesACG/api.php';
            if (($scope.data.username != null && $scope.data.username != "") && ($scope.data.userPassw != null && $scope.data.userPassw != "") && 
            ($scope.data.userApellido != null && $scope.data.userApellido != "") && ($scope.data.userEmail != null && $scope.data.userEmail != "") 
            && ($scope.data.genre != null && $scope.data.genre != "") && ($scope.data.userPasswRepeat != null && $scope.data.userPasswRepeat != "")) {
                if ($scope.data.userPassw == $scope.data.userPasswRepeat) {
                    $http.post(link, { "username": $scope.data.username, "userPassw": $scope.data.userPassw, "userApellido": $scope.data.userApellido, "userEmail": $scope.data.userEmail, "genre": $scope.data.genre }).then(function (res) {
                        $scope.response = res.data;
                    });

                    alert("noooo");
                } else {
                    alert("No son iguales las contraseñas");
                }
            } else {
                alert("yupiyapaaa");
            }
        };
    })
    .controller('AreaCtrl', function ($scope, $stateParams, Profiles) {
        $scope.profiles = Profiles.all();
    })
;