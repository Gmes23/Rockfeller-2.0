/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// import React from 'react';
// import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

// import GlobalStyle from '../../global-styles';

// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;

// export default function App() {
//   return (
//     <AppWrapper>
//       <Helmet
//         titleTemplate="%s - React.js Boilerplate"
//         defaultTitle="React.js Boilerplate"
//       >
//         <meta name="description" content="A React.js Boilerplate application" />
//       </Helmet>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/features" component={FeaturePage} />
//         <Route path="" component={NotFoundPage} />
//       </Switch>
//       <Footer />
//       <GlobalStyle />
//     </AppWrapper>
//   );
// }


// import React from 'react';
// import Helmet from 'react-helmet';
// import styled from 'styled-components';


// import request from 'utils/request';
// import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';

// import Header from 'components/Header';
// import Footer from 'components/Footer';
// // import LeftContainer from 'components/LeftContainerProfile';
// // import MainActionContainer from 'components/MainActionContainer';
// // import withProgressBar from 'components/ProgressBar';
// import Logo from 'components/Logo/Logo';
// // import MobileMenu from 'components/MenuMobile/MenuMobile';
// import SearchBar from 'components/SearchBar/SearchBar';

// // import FeatureWidget from 'components/FeaturesNav/FeaturesNav';
// import CalendarWidget from 'components/Calendar/Calendar';
// import LanguageOption from 'components/Language/LanguageOption';


// const AppWrapper = styled.div`
//   max-width: 100%;
//   margin: 0 auto;
//   display: flex;
//   padding: 0;
//   flex-direction: column;
// `;

// const MobileWrapper = styled.div`
//   @media screen and (max-width: 360px) {
//     position: absolute;
//     top: 20%;
//     height: 100px;
//     width: 100%;
//     paddin-left: 10%;
//     paddin-right: 10%;
//     display: flex;
//   }
// `;

// // export default function App(props) {
// //   return (
// //     <AppWrapper>
// //       <Helmet
// //         titleTemplate="Rockfeller - Tickets for your events"
// //         defaultTitle="Rockfeller"
// //         meta={[
// //           { name: 'description', content: 'a ticket online store' },
// //         ]}
// //       />
// //       {/* <Logo /> */}
// //       {/* <SearchBar /> */}
// //       <MobileWrapper>
// //         {/* <FeatureWidget /> */}
// //         {/* <CalendarWidget /> */}
// //         {/* <LanguageOption /> */}
// //         {/* <MobileMenu /> */}
// //         {/* <LeftContainer /> */}
// //       </MobileWrapper>

// //       {React.Children.toArray(props.children)}
// //     </AppWrapper>
// //   );
// // }


// export default function App() {
//   return (
//     <AppWrapper>
//       <Helmet
//         titleTemplate="%s - React.js Boilerplate"
//         defaultTitle="React.js Boilerplate"
//       >
//         <meta name="description" content="A React.js Boilerplate application" />
//       </Helmet>
//       {/* <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/features" component={FeaturePage} />
//         <Route path="" component={NotFoundPage} />
//       </Switch>
//       <Footer />
//       <GlobalStyle /> */}
//     </AppWrapper>
//   );
// }
// // export default(App);
// // export default withProgressBar(App);


/* REAL COINTAINER **********************************
/* REAL COINTAINER **********************************
/* REAL COINTAINER **********************************
/* REAL COINTAINER **********************************
/* REAL COINTAINER **********************************
*/


import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

//Route Components
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { FAQpage } from 'containers/FAQ/index'
import { ContactPage } from 'containers/Contact/index'


import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

import CalendarWidget from 'components/Calendar/Calendar';
// import Logo from 'components/Logo/Logo';
import LeftContainer from 'components/LeftContainerProfile';
// // import withProgressBar from 'components/ProgressBar';
import MobileMenu from 'components/MenuMobile/MenuMobile';
import SearchBar from 'components/SearchBar/SearchBar';
import FeatureWidget from 'components/FeaturesNav/FeaturesNav';
import LanguageOption from 'components/Language/LanguageOption';



// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0;
  flex-direction: column;
`;

const MobileWrapper = styled.div`
  @media screen and (max-width: 360px) {
    position: absolute;
    top: 20%;
    height: 100px;
    width: 100%;
    paddin-left: 10%;
    paddin-right: 10%;
    display: flex;
  }
`;

export default function App() {
  return (
    <AppWrapper>
        <Helmet
        titleTemplate="Rockfeller - Tickets for your events"
        defaultTitle="Rockfeller"
        meta={[
          { name: 'description', content: 'a ticket online store' },
        ]}
        />
    
      {/* <SearchBar /> */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/FAQ" component={FAQpage} />
        <Route path="/contact" component={ContactPage} />

      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />

      <MobileWrapper>
        <FeatureWidget />
        <CalendarWidget />
        <LanguageOption />
        <MobileMenu />
        <LeftContainer />
      </MobileWrapper>
    </AppWrapper>
  );
}
