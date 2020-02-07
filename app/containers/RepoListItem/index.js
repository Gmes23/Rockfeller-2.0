// /**
//  * RepoListItem
//  *
//  * Lists the name and the issue count of a repository
//  */

// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { FormattedNumber } from 'react-intl';

// import { makeSelectCurrentUser } from 'containers/App/selectors';
// import ListItem from 'components/ListItem';
// import IssueIcon from './IssueIcon';
// import IssueLink from './IssueLink';
// import RepoLink from './RepoLink';
// import Wrapper from './Wrapper';

// export function RepoListItem(props) {
//   const { item } = props;
//   let nameprefix = '';

//   // If the repository is owned by a different person than we got the data for
//   // it's a fork and we should show the name of the owner
//   if (item.owner.login !== props.currentUser) {
//     nameprefix = `${item.owner.login}/`;
//   }

//   // Put together the content of the repository
//   const content = (
//     <Wrapper>
//       <RepoLink href={item.html_url} target="_blank">
//         {nameprefix + item.name}
//       </RepoLink>
//       <IssueLink href={`${item.html_url}/issues`} target="_blank">
//         <IssueIcon />
//         <FormattedNumber value={item.open_issues_count} />
//       </IssueLink>
//     </Wrapper>
//   );

//   // Render the content into a list item
//   return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
// }

// RepoListItem.propTypes = {
//   item: PropTypes.object,
//   currentUser: PropTypes.string,
// };

// export default connect(
//   createStructuredSelector({
//     currentUser: makeSelectCurrentUser(),
//   }),
// )(RepoListItem);



/* NEWEW PAGE 

/* NEWEW PAGE 
/* NEWEW PAGE 
/* NEWEW PAGE 
/* NEWEW PAGE 
/* NEWEW PAGE 
/* NEWEW PAGE 
/* NEWEW PAGE 
/* NEWEW PAGE 
*/











import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

// import { makeSelectCurrentSearchValue } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';


import { makeSelectCurrentUser } from 'containers/App/selectors';


import styled from 'styled-components';

import Img from './Img';
import { makeSelectCurrentSearchValue } from '../App/selectors';
// import PlaceholderB from './placeholderB.jpg'


const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  transition: all 0.25s ease;
  cursor: pointer;
`;

const DateResultWrap = styled.div`
  width:  11%;
  height: 210px;
  background-color: red;
  text-align: center;
  padding-top: 30px;


  @media screen and (max-width: 360px) {
    height: 110px;
    width: 20%;
    padding-top: 10px;
  }
`;

const ResultImgWrap = styled.div`
  height: 100%;
  width: 55%;


  @media screen and (max-width: 360px) {
    width: 80%; 
  }
`;

const ResultDescriptionWrap = styled.div`
  width: 34%;
  height: 100%;
  overflow: hidden;


  @media screen and (max-width: 360px) {
    display: none; 
  }
`;

const DescriptionTitle = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5%;
`;

const TitleH1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  white-space:nowrap;
`;

const ArrowHiddenIcon = styled.a`
  color: red;
  margin-left: 18px;
  position: relative;
  bottom: 0px;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const ResultDescriptionPCont = styled.div`
  padding-left: 5%;
  overflow: hidden;
`;
 
 const ResultDescription_P = styled.p`
  font-family: museo-sans, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: .8em;


 `;

 const DateResult_h1 = styled.h1`
  color: white;
  margin: 0px;
  font-size: 3.3em;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  @media screen and (max-width: 360px) {
    font-size: 2em;    
  }
 `;

  const DateResult_p = styled.p`
  margin: 0px;
  color: white;
  font-weight: 600;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: .8em;

  @media screen and (max-width: 360px) {
    font-size: .5em;
  }  
 `;

  const DateResult_p2 = styled.p`
  margin: 0px;
  color: white;
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin-top: 10px;

  @media screen and (max-width: 360px) {
    font-size: .5em;
   }  
 `;

  const DateResult_p3 = styled.p`
  margin: 0px;
  color: white;
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 360px) {
    font-size: .5em;
   }  
 `;


 const Span = styled.span`
  position: absolute;
  border-bottom: solid 1.5px white;
  width: 20px;
`;

const SpanDiv = styled.div`
  width: 100%;
  padding-right: 15%;

  @media screen and (max-width: 360px) {
    padding-right: 30%;
  }  
`;

const PlaceDescription = styled.p`
  margin: 0px;
  font-family: tablet-gothic, sans-serif;
  font-style: italic;
  font-weight: 100;
  margin-left: 15px;
  font-size: 13px;
  white-space:nowrap;
`;

const P_Margin = styled.p`
  font-family: museo-sans, sans-serif;
  font-style: normal;
  font-weight: 100;
  margin-left: 10px;
  margin: 0px;
`;

const PleaseNote = styled.div`
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: .8em;
  margin-top: 10px;
  line-height: 1.4em;
  text-transform: lowercase;
`;

const SpanRed = styled.span`
  color: rgb(254,0,0);
`;

const BuyDiv = styled.div`
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: .8em;
  margin-top: 10px;
  line-height: 1.4em;
  display: flex;
`;

const BuyButton = styled.button`
  background-color: transparent;
  border: 2px solid red;
  border-radius: 7px;
  width: 70px;
  margin-left: 15%;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: black;
  text-decoration: none;
  // padding-top: 3.3333%;
`;

const DoorsPrice = styled.div`
  border-bottom: 2px solid red;
`;

const months = [ "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December" ];


export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  //Hides some of the ticket data, expands when clicked on
  constructor(props) {
      super(props)
      this.state = {
        expandedTicket: false,
      }
      this.toggleExpandedTicket = this.toggleExpandedTicket.bind(this);
  }
  toggleExpandedTicket() {
      this.setState({ expandedTicket: !this.state.expandedTicket, });
  }
  
  render() {
    // json from ticketmaster api
    const item = this.props.item;

    console.log(item , ' this is item from repolist component')

    // converting date json
    var dateObj = item.dates.start.localDate;
    var date = dateObj.split('-')[2];
    var year = dateObj.split('-')[0];
    var month = months[parseInt(dateObj.split('-')[1]) - 1];

    // converting currency json 
    // var minPrice = parseInt(item.priceRanges[0].min);
    // var maxPrice = parseInt(item.priceRanges[0].max);

    
    // search threw json array and use the high def picture as the img url src
    for(var i = 0; i < item.images.length; i++){
        if(item.images[i].ratio == "16_9" && item.images[i].width == 1024)
        {
        var artistcover = item.images[i].url;
        }
    }

    // if (items.pleaseNote == false ) {
    //   return false
    // } else {
    //   return items.pleaseNote
    // }

    
 
    // Put together the content of the search
    const content = (


      <Container
         className={this.state.expandedTicket ? 'expanded-ticket' : 'normal-ticket'}
          onClick={this.toggleExpandedTicket}
      >

        <DateResultWrap>
              <DateResult_h1 >
                {date}
              </DateResult_h1 >
              <DateResult_p>{month}</DateResult_p>
              <DateResult_p3>{year}</DateResult_p3>
              <SpanDiv>
              <Span />
              </SpanDiv>
              <DateResult_p2>{item._embedded.venues[0].name}</DateResult_p2>
        </DateResultWrap>
            <ResultImgWrap>
              <Img src={artistcover} alt="artist_cover" />
            </ResultImgWrap>
            <ResultDescriptionWrap>
                <DescriptionTitle>
                    <TitleH1> {item._embedded.attractions[0].name} </TitleH1>
                    <PlaceDescription> ({item._embedded.venues[0].city.name} / {item._embedded.venues[0].state.name}) </PlaceDescription>
                    <ArrowHiddenIcon className="material-icons">&#xE317;</ArrowHiddenIcon>
                </DescriptionTitle>
                <ResultDescriptionPCont> 
                  <ResultDescription_P>
                     {/* {item._embedded.attractions[0].name} will be performing at {item._embedded.venues[0].name} for the {item.promoter.name} event */}
                  </ResultDescription_P>
                  <PleaseNote>
                     <SpanRed> Please Note: </SpanRed>{item.pleaseNote}
                  </PleaseNote>
                  <BuyDiv>
                    <DoorsPrice>
                      {/* Ticket:  ${minPrice} - ${maxPrice} */}
                      <br />
                      Doors: {item.dates.start.localTime}
                    </DoorsPrice>

                    <BuyButton>
                     <a href={item.url}> BUY </a>
                   </BuyButton>
 
                  </BuyDiv>
                </ResultDescriptionPCont>
            </ResultDescriptionWrap>

        </Container>

    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item._embedded.events}`} item={content} />
    );
  }
}

// RepoListItem.propTypes = {
//   item: React.PropTypes.object,
//   currentSearchValue: React.PropTypes.string,
// };


export default connect(
  createStructuredSelector({
    currentSearchValue: makeSelectCurrentSearchValue(),
  }),
)(RepoListItem);