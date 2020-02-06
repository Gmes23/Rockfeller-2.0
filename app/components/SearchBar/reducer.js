// import { fromJS } from 'immutable';

// import { CHANGE_SEARCHVALUE } from './constants';

// const initialState = fromJS({
//   searchvalue: '',
// });

// function homeReducer(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_SEARCHVALUE:
//       return state.set('searchvalue', action.searchname.replace(/@/gi, ''));
//     default:
//       return state;
//   }
// }

// export default homeReducer;


import produce from 'immer';
import { CHANGE_SEARCHVALUE } from './constants';

// The initial state of the App
export const initialState = {
  searchvalue: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SEARCHVALUE:
        // Delete prefixed '@' from the github username
        draft.searchvalue = action.searchvalue.replace(/@/gi, '');
        break;
    }
  });

export default homeReducer;
