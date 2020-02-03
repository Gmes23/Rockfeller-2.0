import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  max-height: 30em;
  padding: 0 1em;


  @media screen and (max-width: 360px) {
   padding-right: 0em;
   padding-top: 0em;
   padding-left: 1em;
   padding-bottom: 0em; 
  }
`;
export default Ul;
