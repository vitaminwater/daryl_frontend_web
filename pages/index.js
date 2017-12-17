import { fromJS } from 'immutable';

import React from 'react'

import {increment, loadData, startClock} from '../redux/actions'
import {withReduxSaga} from '../redux/store'

import styled from 'styled-components'

import Thread from '../components/Thread';

const Container = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
`;

class Index extends React.Component {

  render () {
    return (
      <Container>
        <Thread messages={fromJS([{
          text: 'lol',
        }])} />
    </Container>
    );
  }

}

export default withReduxSaga(Index);
