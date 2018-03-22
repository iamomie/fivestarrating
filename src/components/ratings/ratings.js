import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import RatingActions from './../../actions/ratingActions.js'
import movieRatingStore from './../../stores/MovieRatingStore.js'


class Ratings extends Component {
    constructor(props, context) {
        super(props, context);        
        this._onChange = this._onChange.bind(this);        
        this.state = {
            rating : movieRatingStore.getMovieRating({title:this.props.movie})
        };
        
        this.changeRating = this.changeRating.bind(this);                
    };
         
    componentDidMount = () => {
        movieRatingStore.addChangeListener(this._onChange.bind(this));
    }
   
    componentWillUnMount = () => {
        movieRatingStore.removeChangeListener(this._onChange.bind(this));
    }
    
    _onChange(){
        this.setState({
            rating: movieRatingStore.getMovieRating({title:this.props.movie})                        
        });             
    }

    changeRating( newRating ) {    
        RatingActions.add({title: this.props.movie, rating:newRating});         
    }

    render() {           
        return (
            <StarRatings
                rating={this.state.rating}
                starRatedColor="red"
                changeRating={this.changeRating}
                numberOfStars={5}
                starDimension="20px"
                starSpacing="3px"
            />
        );
    }
}

export default Ratings;
