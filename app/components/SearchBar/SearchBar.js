// import React, { Component } from 'react';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { browserHistory } from 'react-router';

// import {
//   makeSelectListResults,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import styled from 'styled-components';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
// import { loadListResults } from '../../containers/App/actions';
// import { changeSearchValue } from './actions';
// import { makeSelectSearchValue } from './selectors';

// // import ActionBar from 'components/MainActionContainer/homepage';

// const SearchWrapper = styled.div`
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   padding-left: 4%;
//   padding-right: 4%;
//   padding-top: 30px;
//   padding-bottom: 60px;
//   height: 200px;
//   display: flex;
//   @media screen and (max-width: 460px) {
//     width: 82%;
//     position: absolute;
//     top: -21px;
//     right: 0px;
//     height: 200px;
//     padding-left: 4%;
//     padding-right: 4%;
//     padding-bottom: 60px;
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//   }
// `;

// const InputSearch = styled.input`
//   width: 90%;
//   height: 100%;
//   text-align: end;
//   color: gray;
//   padding-top: 45px;
//   font-size: 2.8em;
//   outline: 0;
//   border-width: 0 0 2px 0;
//   border-color: red;
//   border-bottom: 2px solid red;
//   font-family: district-pro, sans-serif;
//   font-style: normal;
//   font-weight: 100;
//   margin-left: 10%;

//   &:hover {
//     background-color: #fff;
//   }
// `;

// const InputIcon = styled.div`
//   float: right;
//   height: 100%;
//   margin-left: 5%;
//   width: 11%;
//   border-bottom: 2px solid red;
//   padding-top: 40px;

//   @media screen and (max-width: 460px) {
//     padding-top: 60px;
//   }
// `;

// const Icon_eyeglass = styled.a`
//   font-size: 3.5em;

//   @media screen and (max-width: 460px) {
//     font-size: 2.2em;
//   }
// `;

// export class SearchBar extends Component {
//   // eslint-disable-line react/prefer-stateless-function
//   /**
//    * when initial state artist is not null, submit the form to load repos
//    *
//    */
//   // componentDidMount() {
//   //   if (this.props.searchvalue && this.props.searchvalue.trim().length > 0) {
//   //     this.props.onSubmitForm();
//   //   }
//   // }

//   render() {
//     // const { loading, error, listresults } = this.props;
//     // const resultListProps = {
//     //   loading,
//     //   error,
//     //   listresults,
//     // };

//     return (
//       <div>
//         <Helmet
//           title="Home Page"
//           meta={[
//             {
//               name: 'description',
//               content: 'Search upcoming concerts by your favorite Artist',
//             },
//           ]}
//         />

//         <SearchWrapper>
//           <form onSubmit={this.props.onSubmitForm} autoComplete="off">
//             <label htmlFor="searchvalue">
//               <InputSearch
//                 id="searchvalue"
//                 type="text"
//                 placeholder="Search"
//                 value={this.props.searchvalue}
//                 onChange={this.props.onChangeSearchValue}
//                 autoComplete="off"
//               />
//             </label>
//           </form>
//           <InputIcon>
//             <Icon_eyeglass className="material-icons">search</Icon_eyeglass>
//           </InputIcon>
//         </SearchWrapper>
//       </div>
//     );
//   }
// }

// // SearchBar.propTypes = {
// //   // loading: React.PropTypes.bool,
// //   // error: React.PropTypes.oneOfType([
// //   //   React.PropTypes.object,
// //   //   React.PropTypes.bool,
// //   // ]),
// //   listresults: React.PropTypes.oneOfType([
// //     React.PropTypes.array,
// //     React.PropTypes.bool,
// //   ]),
// //   onSubmitForm: React.PropTypes.func,
// //   searchvalue: React.PropTypes.string,
// //   onChangeSearchValue: React.PropTypes.func,
// // };

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeSearchValue: evt => dispatch(changeSearchValue(evt.target.value)),
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadListResults());
//     },
//   };
// }

// const mapStateToProps = createStructuredSelector({
//   listresults: makeSelectListResults(),
//   searchvalue: makeSelectSearchValue(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// // Wrap the component to inject dispatch and state into it
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SearchBar);


import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector, defaultMemoize } from 'reselect';



import {
  makeSelectListResults,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
import { loadListResults } from '../../containers/App/actions';
import { changeSearchValue } from './actions';
import { makeSelectSearchValue } from './selectors';


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
  @media screen and (max-width: 460px) {
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


class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: '',
  //     searchSubmit: ''
  //   }
  //   this.handleSearchChange = this.handleSearchChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSearchChange = (e) => {
  //   this.setState({
  //     search: e.target.value
  //   });
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     searchSubmit: this.state.search
  //   })
  // }
  // componentDidMount() {
  //   if (this.props.searchvalue && this.props.searchvalue.trim().length > 0) {
  //     this.props.onSubmitForm();
  //   }
  // }

  render() {
    console.log(this.state)
    const { loading, error, listresults } = this.props;
    const resultListProps = {
      loading,
      error,
      listresults,
    };
    return (
      <div>
      
        <SearchWrapper>
          <form onSubmit={this.handleSubmit} >
            <InputSearch
              type="text"
              placeholder="Search"
              onChange={this.handleSearchChange}
            />
          </form>
          <InputIcon>
            <Icon_eyeglass className="material-icons">search</Icon_eyeglass>
          </InputIcon>
{/*         
            <form onSubmit={this.props.onSubmitForm} autoComplete="off">
              <label htmlFor="searchvalue">
                <InputSearch
                  id="searchvalue"
                  type="text"
                  placeholder="Search"
                  value={this.props.searchvalue} 
                  onChange={this.props.onChangeSearchValue} 
                  autoComplete="off"
                />
              </label>
            </form>
             <InputIcon>
                  <Icon_eyeglass className="material-icons">search</Icon_eyeglass>
             </InputIcon> */}
        </SearchWrapper>
      </div>
    )
  }
}

export default(SearchBar)

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeSearchValue: (evt) => dispatch(changeSearchValue(evt.target.value)),
//     onSubmitForm: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadListResults())
//     },
//   };
// }

// const mapStateToProps = createStructuredSelector({
//   listresults: makeSelectListResults(),
//   searchvalue: makeSelectSearchValue(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
