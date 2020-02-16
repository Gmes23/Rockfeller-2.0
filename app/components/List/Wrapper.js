import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    right: 0px;
    top: 250px;
    width: 86.69%;
    padding-right: 4%;
    padding-left: 10vw;

    @media screen and (max-width: 480px) {
     padding-left: 0px;
     width: 100%;
     top: 250px;
   }
`;

export default Wrapper;
