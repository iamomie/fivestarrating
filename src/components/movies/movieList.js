import React, { Component } from 'react';
import Ratings from './../ratings/ratings.js'

function createMovieRow(movie){
    
    return (         
            <tr key={movie.id}>                
                <td className="movieDetail">{movie.title} : {movie.year}</td>
                <td className="moviePlot">{movie.plot}</td>
                <td className="movieDetail">{<img src={ movie.poster} style={{width: 100, height: 100}} alt="Movie" />}</td>
                <td className="movieDetail"><Ratings movie={movie.title}/></td>
            </tr>                
    );
};

class MovieList extends Component{
    render(){        
        return(
            <div>                
                <table className="table">            
                    <thead>
                    </thead>
                    <tbody>                        
                        {this.props.movies.map(createMovieRow, this)}    
                    </tbody>
                </table>
            </div>
        );
    }
};


export default MovieList;