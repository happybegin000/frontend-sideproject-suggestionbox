app.factory("commentsFB", ["$firebaseArray",
  function($firebaseArray) {

  	var _commentID = '';
  	var service = {};

  	service.setCommentID = function(commentID){
  		_commentID = commentID;
  	}

  	service.callFB = function(){
  		var ref = firebase.database().ref('commentsFB/' + _commentID);
  		return $firebaseArray(ref);
  	}

  	service.getSuggestion = function(){
  		var ref = firebase.database().ref('suggestionsFB/' + _commentID);
  		return $firebaseArray(ref);

  	}

  	return service;

  }
]);