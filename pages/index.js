import React from 'react'

import {increment, loadData, startClock} from '../redux/actions'
import {withReduxSaga} from '../redux/store'

import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

class Index extends React.Component {

  render () {
    return (
      <Title>lol</Title>
    );
  }

}

export default withReduxSaga(Index);
