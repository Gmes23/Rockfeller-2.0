/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;


const makeSelectCurrentSearchValue = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentSearchValue')
);

// const makeSelectCurrentUser = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.currentUser,
//   );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

// const makeSelectRepos = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.userData.repositories,
//   );

  // const makeSelectListResults = () => createSelector(
  //   selectGlobal,
  //   (globalState) => globalState.getIn(['searchData', 'listresultsresponse'])
  // );

  const makeSelectListResults = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );


const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  // makeSelectCurrentUser,
  makeSelectCurrentSearchValue,

  makeSelectLoading,
  makeSelectError,
  // makeSelectRepos,
  makeSelectListResults,

  makeSelectLocation,
};
