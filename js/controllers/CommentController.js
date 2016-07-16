app.controller('CommentController', [
	'$scope', 
	'suggestions',
	'suggestionsFB',
	'commentsFB',
	'$routeParams',
	function($scope, suggestions, suggestionsFB, commentsFB, $routeParams) {

		var comments = commentsFB;
		comments.setCommentID($routeParams.id);
		$scope.comments = comments.callFB();
		$scope.suggestion = comments.getSuggestion();

		$scope.suggestion.$watch(function(){
				$scope.title = $scope.suggestion[1].$value;
			});

		$scope.upVote = function(comment){
			comment.upvotes += 1;
			$scope.comments.$save(comment).then(function(){
				console.log("saved!");
			})

			$scope.suggestion = $scope.title[1].$value;
			//console.log($scope.title[1].$value);
		};

		$scope.addComment = function(){

			if(!$scope.comment || $scope.comment === ""){
				return;
			}

			$scope.comments.$add({
				body: $scope.comment,
				upvotes: 0,
      			timestamp: firebase.database.ServerValue.TIMESTAMP
			});

			$scope.comment = "";

		};
}]);
