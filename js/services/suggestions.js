app.factory('suggestions', ['$http', function($http) {
	var demoSuggestions = {
		posts: [
			{
				title: 'Free Pizza at club meetings',
				upvotes: 5,
				comments: []
			},
			{
				title: 'Nirvana the rock band',
				upvotes: 500,
				comments: []
			},			{
				title: 'Coporate rock sucks',
				upvotes: 1,
				comments: []
			},
			{
				title: 'I have 12 consoles',
				upvotes: 25,
				comments: []
			}		
		]
	};

	return	demoSuggestions;
}]);