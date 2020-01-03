/* import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 */
export const fbConfig = {
  
};

/* firebase.initializeApp(config);
firebase.firestore(); */

export const rfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableLogging: false
}


export default { fbConfig, rfConfig };
