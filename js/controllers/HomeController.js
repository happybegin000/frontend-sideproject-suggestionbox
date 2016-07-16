app.controller('HomeController', [
	'$scope', 
	'suggestions',
	'suggestionsFB',
	'orderByFilter',
	function($scope, suggestions, suggestionsFB, orderBy) {

		$scope.helloWorld = "Hello, AngularJS!";
		//$scope.posts = suggestions.posts;
		//$scope.posts = orderBy($scope.posts, 'upvotes', true);

		suggestions.posts = orderBy(suggestions.posts, '-upvotes');
		$scope.posts = suggestions.posts;

		$scope.postsFB =  suggestionsFB;

		$scope.addSuggestion = function(){

			if(!$scope.title || $scope.title === ""){
				return;
			}

			$scope.postsFB.$add({
				title: $scope.title,
				upvotes: 0,
      			timestamp: firebase.database.ServerValue.TIMESTAMP,
				comments: []
			});

			$scope.title = "";

		};

		$scope.upVote = function(post){
			post.upvotes += 1;
			$scope.postsFB.$save(post).then(function(){
				console.log("upvoted");
			});
			//suggestions.posts = orderBy(suggestions.posts, '-upvotes');
		};

}]);
