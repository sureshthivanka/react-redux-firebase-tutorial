import * as actions from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false,
    verifyEmail: {
        error: null,
        loading: false,
    },
    recoverPassword: {
        error: null,
        loading: false,
    },
    profileEdit: {
        error: null,
        loading: false,
    },
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.CLEAN_UP:
            return {
                ...state, 
                error: null, 
                loading: false, 
                verifyEmail: { 
                    ...state.verifyEmail, 
                    loading: false, 
                    error: null 
                }, 
                recoverPassword: { 
                    ...state.recoverPassword, 
                    loading: false, 
                    error: null 
                },
                profileEdit: { 
                    ...state.profileEdit, 
                    loading: false, 
                    error: null 
                },
        };

        case actions.AUTH_START:
            return {...state, loading: true};
        
        case actions.AUTH_END:
            return {...state, loading: false};
        
        case actions.AUTH_FAIL:
            return {...state, error: payload };
        
        case actions.AUTH_SUCCESS:
            return {...state, error: false };

        case actions.VERIFY_START:
            return {...actions, verifyEmail: {...state.verifyEmail, loading: true}};
        
        case actions.VERIFY_SUCCESS:
            return {...actions, verifyEmail: {...state.verifyEmail, loading: false, error: false}, };

        case actions.VERIFY_FAIL:
            return {...actions, verifyEmail: {...state.verifyEmail, loading: false, error: payload}, };
        
        case actions.RECOVERY_START:
            return {...actions, recoverPassword: {...state.recoverPassword, loading: true}};
        
        case actions.RECOVERY_SUCCESS:
            return {...actions, recoverPassword: {...state.recoverPassword, loading: false, error: false}, };

        case actions.RECOVERY_FAIL:
            return {...actions, recoverPassword: {...state.recoverPassword, loading: false, error: payload}, };

        case actions.PROFILE_EDIT_START:
            return {
                ...state, 
                profileEdit: { ...state.profileEdit, loading: true},
            };
        
        case actions.PROFILE_EDIT_SUCCESS:
            return {
                ...state, 
                profileEdit: { ...state.profileEdit, loading: false, error: false },
            };
        
        case actions.PROFILE_EDIT_FAIL:
            return {
                ...state, 
                profileEdit: { ...state.profileEdit, loading: false, error: payload },
            };

        default:
            return state;
    }
};