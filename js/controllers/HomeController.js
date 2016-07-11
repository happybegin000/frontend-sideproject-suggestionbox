app.controller('HomeController', [
	'$scope', 
	'suggestions',
	function($scope, suggestions) {

		$scope.helloWorld = "Hello, AngularJS!";
		$scope.posts = suggestions.posts;

		$scope.addSuggestion = function(){

			if(!$scope.title || $scope.title === ""){
				return;
			}

			$scope.posts.push({
				title: $scope.title,
				upvotes: 0
			});

			$scope.title = "";

		};

		$scope.upVote = function(post){
			post.upvotes += 1;
		};

}]);
