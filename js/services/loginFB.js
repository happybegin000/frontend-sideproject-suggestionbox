app.factory("loginFB", [
  function($firebaseArray) {

	var service = {};
	var _uid = '';
	var _isAnonymous = '';
	var _user = '';

	service.signIn = function() {

		firebase.auth().signInAnonymously().catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});

		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    // User is signed in.
		    _isAnonymous = user.isAnonymous;
		    _uid = user.uid;
		    _user = user;
		    //console.log(_user);
		    // ...
		  } else {
		    // User is signed out.
		    // ...
		  }
		  // ...
		});
	}

	service.getUID = function(){
		return _uid;
	}

	service.getUser = function(){
		return _user;
	}

	return service;
  }
]);