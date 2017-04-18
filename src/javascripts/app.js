import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './container/App'

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


import configureStore from './store/configureStore'
const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
)
