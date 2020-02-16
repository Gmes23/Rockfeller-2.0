import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

body.fontLoaded {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#app {
  // background-color: #fafafa;
  min-height: 100%;
  min-width: 100%;
}

p,
label {
  font-family: Georgia, Times, 'Times New Roman', serif;
  line-height: 1.5em;
}

h1 {
  margin: 0px;
}

.expanded-ticket {
  height: 550px;

  @media screen and (max-width: 360px) {
   height: 300px;
  }
}

.normal-ticket {
  height: 210px;

//   @media screen and (max-width: 360px) {
//    height: 110px;
//  }

 @media screen and (max-width: 375px) {
  height: 110px;
 }
}

a, a:hover, a:active, a:visited {
  text-decoration: none !important;
  cursor: pointer;
  color: inherit;
}

form {
  background-color: transparent !important;
}


`;

export default GlobalStyle;

