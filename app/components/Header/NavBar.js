import styled from 'styled-components';

export default styled.div`
  position: absolute;
  width: 100%;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 30px;
  padding-bottom: 60px;
  height: 250px;
  display: flex;

  @media screen and (max-width: 375px) {
    position: unset;
    height: unset;
    padding-bottom: unset;
  }
`;
