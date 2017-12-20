import React from 'react';
import styled from 'styled-components'

import { withoutAuth } from '../hoc/withAuth';

import HomeForm from '../components/HomeForm';

const Container = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #686868;
  padding: 20pt;
  box-sizing: border-box;
`;

const Logo = styled.div`
  width: 200pt; height 200pt;

  background-image: url(/static/logo.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

class Welcome extends React.Component {

  render() {
    return (
      <Container>
        <Logo />
        <HomeForm />
      </Container>
    )
  }

}

export default withoutAuth(Welcome);
