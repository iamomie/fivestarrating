var movies = require('./movieData').movies;
var _ = require('lodash');

var _generateId = function(movie) {
	return movie.title.toLowerCase() + '-' + movie.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); 
};

var movieApi = {
	getAllMovies: function() {        
        return _clone(movies); 
	},

	getMovieById: function(id) {
		var movie = _.find(movies, {id: id});
		return _clone(movie);
	},
	
	saveMovie: function(movie) {
		
		if (movie.id) {
			var existingmovieIndex = _.indexOf(movies, _.find(movies, {id: movie.id})); 
			movies.splice(existingmovieIndex, 1, movie);
		} else {
			
			movie.id = _generateId(movie);
			movies.push(movie);
		}

		return _clone(movie);
	},

	deleteMovie: function(id) {
		_.remove(movies, { id: id});
	}
};

module.exports = movieApi;