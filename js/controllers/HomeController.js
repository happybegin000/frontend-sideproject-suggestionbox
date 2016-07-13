app.controller('HomeController', [
	'$scope', 
	'suggestions',
	'orderByFilter',
	function($scope, suggestions, orderBy) {

		$scope.helloWorld = "Hello, AngularJS!";
		//$scope.posts = suggestions.posts;
		//$scope.posts = orderBy($scope.posts, 'upvotes', true);

		suggestions.posts = orderBy(suggestions.posts, 'upvotes', true);
		$scope.posts = suggestions.posts;

		$scope.addSuggestion = function(){

			if(!$scope.title || $scope.title === ""){
				return;
			}

			$scope.posts.push({
				title: $scope.title,
				upvotes: 0,
				comments: []
			});

			$scope.title = "";

		};

		$scope.upVote = function(post){
			post.upvotes += 1;
			suggestions.posts = orderBy(suggestions.posts, 'upvotes', true);
		};

}]);
