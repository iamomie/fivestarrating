import { EventEmitter } from 'events';
import AppDispatcher from './../dispatcher/dispatcher.js';
var _ = require('lodash');
var _movies = [];

const CHANGE_EVENT = 'change';


class MovieRatingStore extends EventEmitter {
    addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

    
 getAllMovies(){
        return _movies;
    }
    
 getMovieById(id){
        return _.find(_movies, {id: id});
    }
    
 addMovieRating(movie){
     var movieIndex = _movies.findIndex((obj => obj.title === movie.title));        
        if(movieIndex >=0)
        {               
            _movies[movieIndex].rating = movie.rating;  
            _movies[movieIndex].ratings.push(movie.rating);
            const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
            const avgrating = average(  _movies[movieIndex].ratings); // 5
            _movies[movieIndex].avgrating = avgrating  ;                                  
        }
        else{
            console.info("could not find a movie with title: ", movie.value.title);
        }
       
    }

getMovieRating(movie){    
        var movieIndex = _movies.findIndex(obj => obj.title === movie.title);
        return _movies[movieIndex].avgrating;
    }
      
};

const movieRatingStore = new MovieRatingStore();
AppDispatcher.register((payload) => {
  switch (payload.actionName) {
          case "initialize":                                     
          _movies = payload.movies;          
            movieRatingStore.emit(CHANGE_EVENT);          
            break;
          
          case "updateRating":           
          movieRatingStore.addMovieRating(payload)
            movieRatingStore.emit(CHANGE_EVENT);
            break;
          default:
            break;
            
  }
});

export default new MovieRatingStore();