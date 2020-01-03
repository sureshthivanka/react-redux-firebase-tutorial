import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
//import { firestoreReducer } from 'react-redux-firebase'

export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer
});