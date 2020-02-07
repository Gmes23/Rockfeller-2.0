/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

// import produce from 'immer';
// import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// // The initial state of the App
// export const initialState = {
//   loading: false,
//   error: false,
//   currentUser: false,
//   userData: {
//     repositories: false,
//   },
// };

// /* eslint-disable default-case, no-param-reassign */
// const appReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case LOAD_REPOS:
//         draft.loading = true;
//         draft.error = false;
//         draft.userData.repositories = false;
//         break;

//       case LOAD_REPOS_SUCCESS:
//         draft.userData.repositories = action.repos;
//         draft.loading = false;
//         draft.currentUser = action.username;
//         break;

//       case LOAD_REPOS_ERROR:
//         draft.error = action.error;
//         draft.loading = false;
//         break;
//     }
//   });

// export default appReducer;



import produce from 'immer';
import { LOAD_LIST_RESULTS, LOAD_LIST_RESULTS_SUCCESS, LOAD_LIST_RESULTS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentSearchValue: false,
  searchData: {
    list: false,
  },
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
        draft.searchData.list = action.items;
        draft.loading = false;
        draft.currentSearchValue = action.searchvalue;
        break;

      case LOAD_LIST_RESULTS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;