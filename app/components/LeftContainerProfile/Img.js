import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  width: 100%;
  margin: 0 auto;
  display: block;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
  padding: 3.33px;
`;

export default Img;