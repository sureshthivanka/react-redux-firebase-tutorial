import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import theme from './utils/theme'
import GlobalStyles from './utils/global'

import App from './App';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { fbConfig, rfConfig } from './Firebase/Firebase';

firebase.initializeApp(fbConfig);
firebase.firestore();

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider
            firebase={firebase}
            config={rfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}>
            <BrowserRouter>
                <ThemeProvider theme = {theme}>
                    <>
                    <App />
                    <GlobalStyles />
                    </>
                </ThemeProvider>
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
    
);
