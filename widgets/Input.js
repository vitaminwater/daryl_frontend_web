import styled, { keyframes } from 'styled-components'
import media from '../styles/media';

import InvalidAnimation from './InvalidAnimation';

const Input = styled.input`
  width: 30rem;
  max-width: 90%;
  padding: 1rem 1rem;
  border-radius: 1rem;

  font-size: 1.2em;
  font-weight: 200;
  color: #454545;

  border: 5px solid #627950;

  ${media.desktop`
    font-size: 1.5rem;
    padding: 0.75rem 0.75rem;
    border-width: 4px;
    border-radius: 0.75rem;
  `}

  ${media.tablet`
    font-size: 1.3rem;
    padding: 0.5rem 0.5rem;
    border-width: 3px;
    border-radius: 0.7rem;
  `}

  ${media.phone`
    font-size: 1.2rem;
    padding: 0.5rem 0.75rem;
    border-width: 2px;
    border-radius: 0.6rem;
  `}

  ${props => props.invalid && `
    border: 5px solid #AA4444;
		animation: ${InvalidAnimation} 0.25s;
  `}

  transition: all 0.1s ease-out;
`;

export default Input;
