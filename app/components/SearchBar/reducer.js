import { fromJS } from 'immutable';

import { CHANGE_SEARCHVALUE } from './constants';

const initialState = fromJS({
  searchvalue: 'something',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCHVALUE:
      return state.set('searchvalue', action.searchname.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homeReducer;
