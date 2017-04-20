import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'


import { App, Contacts, Dialog } from './container'


// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import {
    blueGrey500, blueGrey700, blueGrey400
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blueGrey500,
        primary2Color: blueGrey700,
        primary3Color: blueGrey400
    }
});


// Routes
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Route } from 'react-router'
import reducers from './reducers'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);


render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <ConnectedRouter history={history}>
                <App>
                    <Route exact path="/" component={Contacts}/>
                    <Route path="/dialog" component={Dialog}/>
                </App>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);
