import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import CreateMessage from './Components/Messages/create-messages';
import FormRegistration from './Components/Registration/registration-form';
import NotFound from './Components/route-not-found';
import * as serviceWorker from './serviceWorker';
//CSS Library
import 'bulma/css/bulma.css'

// Route login/Reg page to message client
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component= {App} />
                <Route path='/register' component={FormRegistration} />
                <Route path='/messages' component={CreateMessage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
