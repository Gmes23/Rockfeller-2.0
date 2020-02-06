// import { CHANGE_SEARCHVALUE } from './constants';

// /**
//  * Changes the input field of the form
//  *
//  * @param  {searchname} searchname The new text of the input field
//  *
//  * @return {object}    An action object with a type of CHANGE_USERNAME
//  */
// export function changeSearchValue(searchname) {
//   return {
//     type: CHANGE_SEARCHVALUE,
//     searchname,
//   };
// }



import { CHANGE_SEARCHVALUE } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {searchvalue} searchvalue new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeSearchValue(searchvalue) {
  return {
    type: CHANGE_SEARCHVALUE,
    searchvalue,
  };
}
