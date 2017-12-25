import { fromJS } from 'immutable';
import React from 'react'
import styled from 'styled-components'

import { withAuth } from '../hoc/withAuth';

import HabitThread from '../components/HabitThread';
import DarylThread from '../components/DarylThread';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
`;

class Index extends React.Component {

  render () {
    return (
      <Container>
        <DarylThread />
      </Container>
    );
  }

}

export default withAuth(Index);
