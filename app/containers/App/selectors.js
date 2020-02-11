/**
 * The global state selectors
 */


import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;


const makeSelectCurrentSearchValue = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentSearchValue,
  );

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

const makeSelectListResults = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.searchData.list,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectCurrentSearchValue,
  makeSelectLoading,
  makeSelectError,
  makeSelectListResults,
  makeSelectLocation,
};
