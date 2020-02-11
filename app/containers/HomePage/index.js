/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectListResults,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import ReposList from 'components/ReposList';
import reducer from './reducer';
import saga from './saga';

const key = 'home';


//  Component  that renders the main part of the app 
import ActionBar from 'components/MainActionContainer/homepage';


export function HomePage({
  loading,
  error,
  listresults,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });


  const reposListProps = {
    loading,
    error,
    listresults,
  };

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="Rockfeller - Get Your Tickets Now"
          content="Tickets Cheap "
        />
      </Helmet>
      <div>
        <ActionBar />

        <ReposList {...reposListProps} />

      </div>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  listresults: makeSelectListResults(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});



const withConnect = connect(
  mapStateToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
