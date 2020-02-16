import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga.js';


import { loadListResults} from '../../containers/App/actions';
import { changeSearchValue } from './actions';
import { makeSelectSearchValue } from './selectors';


const SearchWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 30px;
  padding-bottom: 63px;
  height: 200px;
  display: flex;
  @media screen and (max-width: 480px) {
    width: 82%;
    position: absolute;
    top: -21px;
    right: 0px;
    height: 200px;
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 50px;
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
  @media screen and (max-width: 375px) {
    padding-bottom: 51px;
  }
`;

const InputSearch = styled.input`
  background: transparent;
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

  @media screen and (max-width: 460px) {
    padding-top: 60px;
  }
`;

const Icon_eyeglass = styled.a`
  font-size: 3.5em;

  @media screen and (max-width: 460px) {
    font-size: 2.2em;
  }
`;

const key  = 'searchbar';

export function SearchBar({
  searchvalue,
  onSubmitForm,
  onChangeSearchValue,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state searchvalue is not null, submit the form to load events 
    if (searchvalue && searchvalue.length > 0) onSubmitForm();
  }, []);

  console.log({searchvalue})

  return (
    <div>
        <SearchWrapper>        
        <form onSubmit={onSubmitForm}>
              <label htmlFor="searchvalue">
                <InputSearch
                  id="searchvalue"
                  type="text"
                  placeholder="Search"
                  value={searchvalue}
                  onChange={onChangeSearchValue} 
                />
              </label>
            </form>
             <InputIcon>
                  <Icon_eyeglass onClick={onSubmitForm} className="material-icons">search</Icon_eyeglass>
             </InputIcon>
        </SearchWrapper>
      </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchValue: evt => dispatch(changeSearchValue(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadListResults());
    },
  };
}



const mapStateToProps = createStructuredSelector({
  searchvalue: makeSelectSearchValue(),
});


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SearchBar);
