import styled from 'styled-components'
import media from '../styles/media';

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;

  ${media.desktop`
    font-size: 2.5em;
  `}

  ${media.tablet`
    font-size: 2em;
  `}

  ${media.phone`
    font-size: 1.7em;
  `}
`;

export default Title;
