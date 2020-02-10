// import { createSelector } from 'reselect';

// const selectHome = state => state.get('home');

// const makeSelectSearchValue = () =>
//   createSelector(
//     selectHome,
//     homeState => homeState.get('searchvalue'),
//   );

// export { selectHome, makeSelectSearchValue };


/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.searchbar || initialState;

const makeSelectSearchValue = () =>
  createSelector(
    selectHome,
    homeState => homeState.searchvalue,
    //  console.log( selectHome, 'this is homeState.searchvalue')
  );

export { selectHome, makeSelectSearchValue };
