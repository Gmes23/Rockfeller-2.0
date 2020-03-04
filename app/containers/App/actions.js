// /*
//  * App Actions
//  *
//  * Actions change things in your application
//  * This app uses a uni-directional data flow, specifically redux,
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
 */
export function listresultsLoadingError(error) {
  return {
    type: LOAD_LIST_RESULTS_ERROR,
    error,
  };
}


/* 
  User Authentication
*/

import {
  SET_USER,
  CLEAR_USER,
  VERIFY_USER
} from './constants';


export const setUser = (user, isAuth) => ({
  type: SET_USER,
  user,
  isAuth
})

export const clearUser = () => ({
  type: CLEAR_USER
})

export const verifyUser = () => dispatch => {
  fetch('/api/user/verify', { credentials: 'include' })
    .then(res => res.json())
    .then(({ user, isAuth }) => dispatch(setUser(user, isAuth)))
    .catch(err => console.log(err, 'err in verifyUser action'))
}

export const loginUser = ({ username, password }) => dispatch => {
  fetch('/api/user/login', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(({ user, isAuth }) => dispatch(setUser(user, isAuth)))
    .catch(err => console.log(err, 'err in loginUser action'))
}

export const registerUser = user => dispatch => {
  fetch('/api/user/register', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  })
  .then(res => res.json())
  .then(({ user, isAuth }) => dispatch(setUser(user, isAuth)))
  .catch(err => console.log(err, 'err in registerUser action'))
}

export const logoutUser = user => dispatch => {
  fetch('/api/user/logout', { credentials: 'include' })
    .then(res => res.json())
    .then(({ user, isAuth }) => dispatch(setUser(user, isAuth)))
    .catch(err => console.log(err))
}