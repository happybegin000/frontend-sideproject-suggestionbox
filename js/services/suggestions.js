app.factory('suggestions', ['$http', function($http) {
	var demoSuggestions = {
		posts: [
			{
				title: 'Free Pizza at club meetings',
				upvotes: 5,
				comments: [
					{
						body: 'i cant wait',
						upvotes: 1
					},
					{
						body: 'i can eat two',
						upvotes: 3					
					}
				]
			},
			{
				title: 'Nirvana the rock band',
				upvotes: 10,
				comments: [					
					{
						body: 'nirvana the best',
						upvotes: 3
					},
					{
						body: 'kurt, chris, david',
						upvotes: 2					
					}
				]
			},			
			{
				title: 'Coporate rock sucks',
				upvotes: 1,
				comments: [					
					{
						body: 'money is everything',
						upvotes: 3
					},
					{
						body: 'not money isn\'t everything',
						upvotes: 2					
					}
				]			
			},
			{
				title: 'I have 12 consoles',
				upvotes: 9,
				comments: [					
					{
						body: 'snes',
						upvotes: 3
					},
					{
						body: 'sega',
						upvotes: 2					
					}
				]			
			}		
		]
	};

	return	demoSuggestions;
}]);