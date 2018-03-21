import Dispatcher from './../dispatcher/dispatcher.js';
import MovieApi from './../api/movieApi.js';

var InitializeActions ={
    initApp(){
        const moviesAll = MovieApi.getAllMovies()   
        Dispatcher.dispatch({
            actionName : "initialize",
            movies: moviesAll       
        })            
    }
}

export default InitializeActions;