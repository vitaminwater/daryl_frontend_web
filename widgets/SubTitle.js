import styled from 'styled-components'
import Title from './Title';
import media from '../styles/media';

const SubTitle = styled(Title)`
  font-size: 2em;

  ${media.tablet`
    font-size: 1.75em;
  `}

  ${media.tablet`
    font-size: 1.5em;
  `}

  ${media.phone`
    font-size: 1.3em;
  `}

`;

export default SubTitle;
