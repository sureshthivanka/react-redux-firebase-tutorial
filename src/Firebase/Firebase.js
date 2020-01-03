/* import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 */
export const fbConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "zeus-a80e8.firebaseapp.com",
  databaseURL: "https://zeus-a80e8.firebaseio.com",
  projectId: "zeus-a80e8",
  storageBucket: "zeus-a80e8.appspot.com",
  messagingSenderId: "1075661153530",
  appId: "1:1075661153530:web:3c2e8cf73eadaf12edd543",
  measurementId: "G-6K1FTZ0QYV"
};

/* firebase.initializeApp(config);
firebase.firestore(); */

export const rfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableLogging: false
}


export default { fbConfig, rfConfig };