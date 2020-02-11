/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_LIST_RESULTS = 'boilerplate/App/LOAD_LIST_RESULTS';
export const LOAD_LIST_RESULTS_SUCCESS = 'boilerplate/App/LOAD_LIST_RESULTS_SUCCESS';
export const LOAD_LIST_RESULTS_ERROR = 'boilerplate/App/LOAD_LIST_RESULTS_ERROR';

// Constants for User Auth
export const SET_USER = 'boilerplate/App/SET_USER'
export const CLEAR_USER = 'boilerplate/App/CLEAR_USER'
export const VERIFY_USER = 'boilerplate/App/VERIFY_USER'