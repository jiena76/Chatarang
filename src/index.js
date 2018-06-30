import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// base of the application, connects url router option with the app
ReactDOM.render(
  <Router>
    {/* instead of doing <App />, doing this below will add "history", location", and "match" in "props" */}
    <Route component={App} />
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();
