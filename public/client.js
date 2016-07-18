angular.module('studentapp', []);

//Here is my controller for the app
angular.module('studentapp').controller('generateList', function($scope, $http){
  $scope.students = [];
// This object lets me call the URL in future functions, able to reuse if addt'l
// features are ever added (lol)
  var configObject = {
    method: "GET",
    url: "/students"
  };
//Here are my functions for after the call to /students- a failure and success
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
//Here is actually where the above functions get called when the button in the html
// is called
$scope.generateApp = function(){
  getList();
  };
});
