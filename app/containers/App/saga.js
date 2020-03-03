import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SET_USER } from 'containers/App/constants';
import { setUser, verifyUser } from 'containers/App/actions';
import { listresultsLoaded, listresultsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

import { makeSelectSearchValue } from 'containers/SearchBar/selectors';

/**
 *  This handles the request/response from searchvalue, for ticketmaster data
 */
export function* getUserData() {


  try {
     /*
       Use request helper (see 'utils/request')
       Calls events from the ticketmaster API to load events in the frontpage
     */
    const listresults = yield call(request, requestURL);
    yield put(setUser(listresults, searchvalue));
  } catch (err) {
    yield put(listresultsLoadingError (err));
  }
}

/** 
 * Root saga manages watcher lifecycle
 */
export default function* userData() {
  // Watches for LOAD_LIST_RESULTS actions and calls getListResults when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SET_USER, getUserData);
}