app.controller('CommentController', [
	'$scope', 
	'suggestions',
	'suggestionsFB',
	'commentsFB',
	'$routeParams',
	'loginFB',
	function($scope, suggestions, suggestionsFB, commentsFB, $routeParams, loginFB) {

		//loginFB.signIn();
		var comments = commentsFB;
		comments.setCommentID($routeParams.id);
		$scope.comments = comments.callFB();
		$scope.suggestion = comments.getSuggestion();

		$scope.suggestion.$watch(function(){
				if($scope.suggestion[1] != null){
					$scope.title = $scope.suggestion[1].$value;
				}
			});

		$scope.upVote = function(comment){
			comment.upvotes += 1;
			$scope.comments.$save(comment).then(function(){
				console.log("saved!");
			})

			$scope.suggestion = $scope.title[1].$value;
			console.log(loginFB.getUID());
		};

		$scope.addComment = function(){

			if(!$scope.comment || $scope.comment === ""){
				return;
			}

			$scope.comments.$add({
				uid: loginFB.getUID(),
				body: $scope.comment,
				upvotes: 0,
      			timestamp: firebase.database.ServerValue.TIMESTAMP
			});

			$scope.comment = "";

			console.log(loginFB.getUID());

		};
}]);
