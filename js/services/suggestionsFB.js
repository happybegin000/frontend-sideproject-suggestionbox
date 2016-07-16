app.factory("suggestionsFB", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = firebase.database().ref('suggestionsFB');

    return $firebaseArray(ref);
  }
]);