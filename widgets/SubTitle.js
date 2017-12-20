import styled from 'styled-components'
import Title from './Title';
import media from '../styles/media';

const SubTitle = styled(Title)`
  font-size: 2rem;

  ${media.tablet`
    font-size: 1.75rem;
  `}

  ${media.tablet`
    font-size: 1.5rem;
  `}

  ${media.phone`
    font-size: 1.3rem;
  `}

`;

export default SubTitle;
