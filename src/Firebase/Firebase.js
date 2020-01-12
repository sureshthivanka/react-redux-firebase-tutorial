/* import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 */
export const fbConfig = {
  apiKey: "AIzaSyCTCgGt3PY4QdRaJRE3wqAZYRpw7ihQHAA",
  authDomain: "react-redux-641f7.firebaseapp.com",
  databaseURL: "https://react-redux-641f7.firebaseio.com",
  projectId: "react-redux-641f7",
  storageBucket: "react-redux-641f7.appspot.com",
  messagingSenderId: "345033898408",
  appId: "1:345033898408:web:237fadfbcd42ad30b1c59d"
};

/* firebase.initializeApp(config);
firebase.firestore(); */

export const rfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableLogging: false
}


export default { fbConfig, rfConfig };