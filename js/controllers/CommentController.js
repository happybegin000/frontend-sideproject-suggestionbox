app.controller('commentController', [
	'$scope', 
	'suggestions',
	'$routeParams',
	function($scope, suggestions, $routeParams) {

		$scope.post = suggestions.posts[$routeParams.id];

		$scope.upVote = function(comment){
			comment.upvotes += 1;
		};

		$scope.addComment = function(){

			if(!$scope.comment || $scope.comment === ""){
				return;
			}

			$scope.post.comments.push({
				body: $scope.comment,
				upvotes: 0
			});

			$scope.comment = "";

		};
}]);
