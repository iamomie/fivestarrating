import { Component } from 'react';
import dispatcher from './../dispatcher/dispatcher.js';

class RatingActions extends Component {
    
 static add(newrating){  
        dispatcher.dispatch({
            actionName : "updateRating",
            rating: newrating.rating,
            title: newrating.title
        })
     
    }
}

export default RatingActions;