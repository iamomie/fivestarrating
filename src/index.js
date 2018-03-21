import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import InitializeActions from './actions/initializeActions.js';

InitializeActions.initApp();
    
    window.onload = () => {
        function render() {
            ReactDOM.render(<App />, document.getElementById("root"));
        }
        render();
        registerServiceWorker();
    }