import {
  take,
  call,
  put,
  select,
  cancel,
  takeLatest,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_LISTRESULTS } from 'containers/App/constants';
import {
  listresultsLoaded,
  listresultsLoadingError,
} from 'containers/App/actions';

import request from 'utils/request';
// import { makeSelectSearchValue } from 'containers/HomePage/selectors';

import { makeSelectSearchValue } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getListResults() {
  // Select searchvalue from store
  const searchvalue = yield select(makeSelectSearchValue());

  const requestURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0`;

  // const requestURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=ugDKj6qVDvxl39iQzLiY5VR2c173RABy&keyword=${searchvalue}&size=5`;

  try {
    // Call our request helper (see 'utils/request')
    const listresults = yield call(request, requestURL);
    yield put(listresultsLoaded(listresults, searchvalue));
  } catch (err) {
    yield put(listresultsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* ticketmasterData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_LISTRESULTS, getListResults);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [ticketmasterData];
