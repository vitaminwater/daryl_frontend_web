import styled, { keyframes } from 'styled-components'
import media from '../styles/media';

import InvalidAnimation from './InvalidAnimation';

const CheckBox = styled.div`
  margin-right: 0.5rem;
  padding: 0.8rem 0.8rem;
  width: 0rem;
  height: 0rem;
  border-radius: 0.3rem;

  border: 4px solid #627950;
  background-color: white;
  box-shadow: inset 0 0 0 0.125rem white, inset 0 0 0 0.125rem white;

  ${media.desktop`
    padding: 0.8rem 0.8rem;
    border-width: 4px;
    border-radius: 0.3rem;
  `}

  ${media.tablet`
    padding: 0.6rem 0.6rem;
    border-width: 3px;
    border-radius: 0.3rem;
  `}

  ${media.phone`
    padding: 0.6rem 0.6rem;
    border-width: 2px;
    border-radius: 0.3rem;
  `}

  ${props => props.invalid && `
    border: 5px solid #AA4444;
		animation: ${InvalidAnimation} 0.25s;
  `}

  ${({checked}) => (checked && 'background-color: #9EBB9F;')}

  transition: all 0.1s ease-out;
`;

export default CheckBox;
