import { EventEmitter } from 'events';
import AppDispatcher from './../dispatcher/dispatcher.js';
var _ = require('lodash');
var _movies = [];
var assign = require('object-assign')

const CHANGE_EVENT = 'change';

var MovieRatingStore = assign({}, EventEmitter.prototype, {

    addChangeListener(cb) {        
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

    emitChange(){
        this.emit(CHANGE_EVENT);
    },
    
 getAllMovies(){
        return _movies;
    },
    
 getMovieById(id){
        return _.find(_movies, {id: id});
    },
    
 addMovieRating(movie){     
     var movieIndex = _movies.findIndex((obj => obj.title === movie.title));        
        if(movieIndex >=0)
        {               
            _movies[movieIndex].rating = movie.rating;  
            _movies[movieIndex].ratings.push(movie.rating);
            const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
            const avgrating = average(_movies[movieIndex].ratings); // 5
            _movies[movieIndex].avgrating = avgrating  ;                                  
        }
        else{
            console.info("could not find a movie with title: ", movie.value.title);
        }
       
    },

getMovieRating(movie){    
        var movieIndex = _movies.findIndex(obj => obj.title === movie.title);
        return _movies[movieIndex].avgrating;
    },    
});


AppDispatcher.register((payload) => {
  switch (payload.actionName) {
          case "initialize":                                     
          _movies = payload.movies;          
            MovieRatingStore.emitChange();          
            break;
          
          case "updateRating":         
            MovieRatingStore.addMovieRating(payload)
            MovieRatingStore.emitChange();
            break;
          default:
            break;            
  }
});

export default MovieRatingStore;