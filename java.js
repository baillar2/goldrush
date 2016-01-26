angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ["$scope", function($scope){

		$scope.spot = {}
		$scope.show = false
		$scope.textBox = false 

		$scope.locations = []
		console.log($scope.spot)
		console.log($scope.locations)



		$scope.click = function($event, $index){
			console.log(event);
			$scope.spot = {    
				x:event.offsetX-5,
				y:event.offsetY-5,
				note: prompt("Enter a note!")
			}
			$scope.locations.push($scope.spot);
			$scope.show = true;
			console.log($scope.locations)
			console.log($scope.spot.x, $scope.spot.y);
		} 

		$scope.removeSpot = function($index) {
			$scope.locations.splice($index, 1)
			console.log($scope.locations)
		}	

		$scope.enter = function($index) {
			$scope.textBox = true
			console.log("poop")
		}

		$scope.leave = function($index) {
			$scope.textBox = false
			console.log("Turd")
		}

	}])		
