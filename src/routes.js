import React, { Component } from 'react';
import Router from 'react-router';

var DefaultRoute = Router.DefaultRouter;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler ={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="movies" handler={require('./components/movies/moviePage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
    </Route>
);
                                     
export default routes;