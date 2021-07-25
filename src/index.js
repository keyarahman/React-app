import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Route from './Component/Routes'




ReactDOM.render(
    <Router>
        <div className="App">
     <Route/>
        </div>
    </Router>,
    document.getElementById('root')
);

