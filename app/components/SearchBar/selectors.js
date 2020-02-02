import { createSelector } from 'reselect';

const selectHome = state => state.get('home');

const makeSelectSearchValue = () =>
  createSelector(
    selectHome,
    homeState => homeState.get('searchvalue'),
  );

export { selectHome, makeSelectSearchValue };
