angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ["$scope", function($scope){

		$scope.spot = {x:0, y:0}
		$scope.show = false

		$scope.locations = []
		console.log($scope.spot)
		console.log($scope.locations)

		$scope.click = function($event){
			console.log(event);
			$scope.spot.x = event.offsetX;
			$scope.spot.y = event.offsetY;
			$scope.show = true;
			console.log($scope.spot.x, $scope.spot.y);
			$scope.locations.push($scope.spot);

		} 

			

	}])