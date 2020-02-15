/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */


import produce from 'immer';
// For the Homepage SearchBar, this loads events for tickets
import { LOAD_LIST_RESULTS, LOAD_LIST_RESULTS_SUCCESS, LOAD_LIST_RESULTS_ERROR } from './constants';
// For User Auth, this checks if the user is valid for either register or log in 
import { SET_USER, CLEAR_USER, VERIFY_USER } from './constants';


// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentSearchValue: false,
  searchData: {
    list: false,
  },
  // This changes the state of the app if the user is Auth
  isAuth: false,
  user: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_LIST_RESULTS:
        draft.loading = true;
        draft.error = false;
        draft.searchData.list = false;
        break;

      case LOAD_LIST_RESULTS_SUCCESS:
        draft.searchData.list = action.listresults;
        draft.loading = false;
        draft.currentSearchValue = action.searchvalue;
        break;

      case LOAD_LIST_RESULTS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case SET_USER:
        draft.user = action.user;
        draft.isAuth = action.isAuth;
        break;

      case CLEAR_USER:
        return {
          user: null,
          isAuth: false
        }
      default:
        return state
    }
  });

export default appReducer;