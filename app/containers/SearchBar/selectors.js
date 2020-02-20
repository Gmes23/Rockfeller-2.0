import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.searchbar || initialState;

const makeSelectSearchValue = () =>
  createSelector(
    selectHome,
    homeState => homeState.searchvalue
  );

export { selectHome, makeSelectSearchValue };
