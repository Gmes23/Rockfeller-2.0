import produce from 'immer';
import { CHANGE_SEARCH_VALUE } from './constants';

// The initial state of the App
export const initialState = {
  searchvalue: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SEARCH_VALUE:
        // console.log(draft.searchvalue, 'searchvalue from homereducer in searchbar')
        draft.searchvalue = action.searchvalue;
        break;
    }
  });

export default homeReducer;
