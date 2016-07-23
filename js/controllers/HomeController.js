app.controller('HomeController', [
	'$scope', 
	'suggestionsFB',
	'orderByFilter',
	'$firebaseAuth',
	'commentsFB',
	'$firebaseArray',
	function($scope, suggestionsFB, orderBy, $firebaseAuth, commentsFB, $firebaseArray) {

		var auth = $firebaseAuth();

	    $scope.signIn = function() {
	      $scope.firebaseUser = null;
	      $scope.error = null;

	      auth.$signInAnonymously().then(function(firebaseUser) {
	        $scope.firebaseUser = firebaseUser;
	      }).catch(function(error) {
	        $scope.error = error;
	      });
	    };

		$scope.postsFB =  suggestionsFB;
  		$scope.comments = {};
  		$scope.commentsFB = commentsFB;
		$scope.commentsFB.getAllComments();

		$scope.addSuggestion = function(){

			if(!$scope.title || $scope.title === ""){
				return;
			}

			$scope.postsFB.$add({
				uid: firebaseUser.uid,
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

		};

}]);
