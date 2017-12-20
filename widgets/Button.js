import styled from 'styled-components'
import media from '../styles/media';

const CTA = styled.button`
  padding: 1rem 4rem;
  margin: 2rem 0;
  border-radius: 1rem;
  cursor: pointer;

  color: white;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 550;

  background-color: #ABC842;
  border: 5px solid #627950;

  ${media.desktop`
    font-size: 2rem;
    padding: 0.75rem 2rem;
    border-width: 4px;
    border-radius: 0.75rem;
  `}

  ${media.tablet`
    font-size: 1.6rem;
    padding: 0.5rem 1.5rem;
    border-width: 3px;
    border-radius: 0.75rem;
  `}

  ${media.phone`
    font-size: 1.4rem;
    padding: 0.4rem 1.3rem;
    border-width: 2px;
    border-radius: 0.6rem;
  `}

  ${props => !props.invalid && !props.loading && `
    &:hover {
      transform: scale(1.1);
      background-color: #BBD852;
      box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.48);
    }
    &:active {
      transform: scale(1.05);
      box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.80);
    }
  `}

  ${props => props.invalid && `
    border: 5px solid #444444;
    background-color: #999999;
  `}

  ${props => props.loading && `
    border: 5px solid #797650;
    background-color: #D6BD5B;
    font-size: 0 !important;

    & > img {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}

  transition: all 0.1s ease-out;
`;

export default CTA;
