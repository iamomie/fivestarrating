import React, { Component } from 'react';
import MovieList from './movieList.js';
import MovieRatingStore from './../../stores/MovieRatingStore.js';

class MoviePage extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            movies : MovieRatingStore.getAllMovies()
        };        
    }
    
   
   
    render(){     
        return(
            <div>
                <h1>Movies</h1> 
                <MovieList movies={this.state.movies} />
            </div>
        )
        
    }
}

export default MoviePage;