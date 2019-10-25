import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'katex/dist/katex.min.css';
import 'video-react/dist/video-react.css';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';


import React from 'react';
import ReactDOM from 'react-dom';


import {App} from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <div>
        <Router>
            <App />
        </Router>

    </div>

    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn menu about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
