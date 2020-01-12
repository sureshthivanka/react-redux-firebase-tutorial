import * as actions from '../actions/actionTypes';

// SignUp action creator

export const signUp = data => async (
    dispatch,
    getState,
    { getFirebase }
) => {
    const firebase = getFirebase();
    dispatch({ type: actions.AUTH_START });
    
    try {
        const res = await firebase
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password);
        console.log(res.user.uid);

        //const sampleData = { firstName: data.firstName, lastName: data.lastName };
        //await firebase.push('users', sampleData); */
    
        /* await firestore 
            .collection('users')
            .doc(res.user.uid)
            .set({
                firstName: data.firstName,
                lastName: data.lastName,
        }); */
        dispatch({ type: actions.AUTH_SUCCESS });
    } catch (err) {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message});
    }
    dispatch({ type: actions.AUTH_END });
};

// Logout action creator

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err.message);
    }
};

// Login Action Creator

export const signIn = data => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: actions.AUTH_START });
    try {
        await firebase.auth().signInWithEmailAndPassword(data.email , data.password);
        dispatch({ type: actions.AUTH_SUCCESS });
    } catch (err ) {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message});
    }
    dispatch({ type: actions.AUTH_END });
};

// Clean up meassages 

export const clean = () => ({
    type: actions.CLEAN_UP,
});