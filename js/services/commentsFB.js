app.factory("commentsFB", ["$firebaseArray",
  function($firebaseArray) {

  	var _commentID = '';
  	var service = {};
    var _firebaseArray = [];

    service.getAllComments = function(){
      var ref = firebase.database().ref('commentsFB/');
      _firebaseArray = $firebaseArray(ref);
    }

    service.getLengthOfComment = function(postID){
      return ObjectLength(_firebaseArray.$getRecord(postID));
    }

  	service.setCommentID = function(commentID){
  		_commentID = commentID;
  	}

    service.setFirebaseArray = function(){
      var ref = firebase.database().ref('commentsFB/' + _commentID);
      _firebaseArray = $firebaseArray(ref);
    }

    service.getNumberOfComments = function(){      
      return _firebaseArray.length;
    }

    service.getPostID = function(){
      return _commentID;
    }

  	service.callFB = function(){
  		var ref = firebase.database().ref('commentsFB/' + _commentID);
      _firebaseArray = $firebaseArray(ref);
  		return $firebaseArray(ref);
  	}

  	service.getSuggestion = function(){
  		var ref = firebase.database().ref('suggestionsFB/' + _commentID);
  		return $firebaseArray(ref);
  	}

  	return service;

  }
]);