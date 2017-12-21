import React from 'react';
import styled from 'styled-components'
import media from '../../styles/media';

const Container = styled.div`
  position: absolute;
  top: 0; left: 0;
  display: flex;
  box-sizing: border-box;
  width: 100%; height: 100%;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.desktop`
    padding: 2rem;
  `}

  ${media.tablet`
    padding: 1.5rem;
  `}
`;

export default class extends React.PureComponent {

  render() {
    const {
      left, opacity, children,
    } = this.props;
    return (
      <Container style={{left: `${left}%`, opacity: `${opacity}`}}>
        {children}
      </Container>
    );
  }
  
};
