import styled from 'styled-components'
import media from '../styles/media';

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;

  ${media.desktop`
    font-size: 2.5rem;
  `}

  ${media.tablet`
    font-size: 2rem;
  `}

  ${media.phone`
    font-size: 1.7rem;
  `}
`;

export default Title;
