// /*
//  * App Actions
//  *
//  * Actions change things in your application
//  * Since this boilerplate uses a uni-directional data flow, specifically redux,
//  * we have these actions which are the only way your application interacts with
//  * your application state. This guarantees that your state is up to date and nobody
//  * messes it up weirdly somewhere.
//  *
//  * To add a new Action:
//  * 1) Import your constant
//  * 2) Add a function like this:
//  *    export function yourAction(var) {
//  *        return { type: YOUR_ACTION_CONSTANT, var: var }
//  *    }
//  */


import {
  LOAD_LIST_RESULTS,
  LOAD_LIST_RESULTS_SUCCESS,
  LOAD_LIST_RESULTS_ERROR,
} from './constants';

/**
 * Load the list results , this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_LIST_RESULTS
 */
export function loadListResults() {
  return {
    type: LOAD_LIST_RESULTS,
  };
}

/**
 * Dispatched when the listresults are loaded by the request saga
 *
 * @param  {array} listresults The ticketmaster data
 * @param  {string} searchvalue The current searchvalue
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function listresultsLoaded(listresults, searchvalue) {
  return {
    type: LOAD_LIST_RESULTS_SUCCESS,
    listresults: listresults._embedded.events,
    searchvalue,
  }
}

/**
 * Dispatched when loading the result data fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function listresultsLoadingError(error) {
  return {
    type: LOAD_LIST_RESULTS_ERROR,
    error,
  };
}


/* User Authentication

*/

import {
   SET_USER,
   CLEAR_USER,
   VERIFY_USER
} from './constants';


export function setUser(userInfo, Auth) {
  return {
    type: SET_USER,
    userInfo,
    Auth
  }
}

export function registerUser (userInfo) {
  return fetch('/api/users/register', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userInfo })
  })
  .then((response) => {
    return console.log(response, 'this is response from registerUser')
    // return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
}