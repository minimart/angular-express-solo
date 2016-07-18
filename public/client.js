angular.module('studentapp', []);


angular.module('studentapp').controller('generateList', function($scope, $http){
  $scope.students = [];

  var configObject = {
    method: "GET",
    url: "/students"
  };

  function handleSuccess(response){
    $scope.students = response.data;
    console.log('Yay!', response);
  };
  function handleFailure(response){
    console.log('Oh noez!', response);
  };
  function getList(){
    $http(configObject).then(handleSuccess, handleFailure);
  };

$scope.generateApp = function(){
  getList();
  };
});
