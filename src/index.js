import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import styled from 'styled-components';

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
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import Loader from './components/UI/Loader/Loader';


firebase.initializeApp(fbConfig);
firebase.firestore();

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const root = document.getElementById('root');

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading....</div>;
    return children
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider
            firebase={firebase}
            config={rfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}>
            <BrowserRouter>
                <AuthIsLoaded>
                    <ThemeProvider theme = {theme}>
                        <>
                        <App />
                        <GlobalStyles />
                        </>
                    </ThemeProvider>
                </AuthIsLoaded>
                
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    root
);
