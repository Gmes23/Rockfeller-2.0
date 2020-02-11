/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectListResults,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';


//  Component  that renders the main part of the app 
import ActionBar from 'components/MainActionContainer/homepage';


const SearchWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 30px;
  padding-bottom: 60px;
  height: 200px;
  display: flex;
  @media screen and (max-width: 360px) {
    width: 82%;
    position: absolute;
    top: -21px;
    right: 0px;
    height: 200px;
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 60px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
`;

const InputSearch = styled.input`
  width: 90%;
  height: 100%;
  text-align: end;
  color: gray;
  padding-top: 45px;
  font-size: 2.8em;
  outline: 0;
  border-width: 0 0 2px 0;
  border-color: red;
  border-bottom: 2px solid red;
  font-family: district-pro, sans-serif;
  font-style: normal;
  font-weight: 100;
  margin-left: 10%;

  &:hover {
     background-color: #fff; 
  }

`;

const InputIcon = styled.div`
  float: right;
  height: 100%;
  margin-left: 5%;
  width: 11%;
  border-bottom: 2px solid red;
  padding-top: 40px;

  @media screen and (max-width: 360px) {
     padding-top: 60px;
  } 
`;

const Icon_eyeglass = styled.a`
  font-size: 3.5em;

  @media screen and (max-width: 360px) {
     font-size: 2.2em;
  }
`;




export function HomePage({
  username,
  loading,
  error,
  listresults,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // useEffect(() => {
  //   // When initial state username is not null, submit the form to load repos
  //   if (username && username.trim().length > 0) onSubmitForm();
  // }, []);

  const reposListProps = {
    loading,
    error,
    listresults,
  };

  return (
    // <article>
      <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
      {/* <ActionBar /> */}

        {/* <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form>
          <ReposList {...reposListProps} />
        </Section> */}

    <ReposList {...reposListProps} />

      </div>
      </div>
    // </article>
  );
}

// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func,
// };

const mapStateToProps = createStructuredSelector({
  listresults: makeSelectListResults(),
  // username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
