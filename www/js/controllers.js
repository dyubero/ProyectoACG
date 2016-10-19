





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
       

           

        
    $scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });
    
  
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

.controller('menuCtrl', function ($scope, Profiles) {


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

    .controller('singinCtrl', function ($scope, $http,$state) {
        
        $scope.data = {}
        $scope.LogInCheck = function () {

            
alert($scope.response);

            
        var link2 = 'http://localHost:8080/PHPFilesACG/checkLog.php';
        if(($scope.data.usernamelog != null && $scope.data.usernamelog != "") && ($scope.data.passwordlog != null && $scope.data.passwordlog != "")){
            $http.post(link2, {"usernamelog": $scope.data.usernamelog, "passwordlog": $scope.data.passwordlog}).then(function(res){
                $scope.response = res.data;
                alert("bien login");
                });
            


if($scope.response != ""){
    $state.go('app.area');
    $scope.response = "";
    
}




            }
      




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
            var link = 'http://localHost:8080/PHPFilesACG/api.php';
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






    .controller('AreaCtrl', function ($scope, $stateParams, Profiles) {
    
    })

 .controller('PantallaInicioCandidatosCtrl', function ($scope, $stateParams,$state, Profiles) {
        
$scope.comenzarApp = function(){
    $state.go('app.login');
    
}

    })

app = angular.module('ModalDemo', []);
app.directive('modalDialog', function() {
  return {
    restrict: 'E',  
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
})


app.controller('MyCtrl', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
}]);