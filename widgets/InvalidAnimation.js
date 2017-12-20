import styled, { keyframes } from 'styled-components'

const InvalidAnimation = keyframes`
  0% {
		transform: translate(0, 0);
  }
  25% {
		transform: translate(-2rem, 0);
  }
  50% {
		transform: translate(2rem, 0);
  }
  75% {
		transform: translate(-2rem, 0);
  } 
	100% {
		transform: translate(0, 0);
  }
`;

export default InvalidAnimation;
