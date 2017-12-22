import React from 'react';
import styled from 'styled-components'

import { withoutAuth } from '../hoc/withAuth';

import HomeForm from '../components/HomeForm';

import { Creators } from '../redux/actions';

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
  flex: 0.5;
  width: 200pt; height 200pt;

  background-image: url(/static/logo.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Empty = styled.div`
  flex: 0.25;
`;

class Welcome extends React.Component {

  render() {
    return (
      <Container>
        <Empty />
        <Logo />
        <HomeForm submitted={this._handleFormSubmitted} />
        <Empty />
      </Container>
    )
  }

  _handleFormSubmitted = (data) => {
    const { dispatch } = this.props;
    dispatch(Creators.createDaryl(data.name, data.email, data.password));
  }

}

export default withoutAuth(Welcome);
