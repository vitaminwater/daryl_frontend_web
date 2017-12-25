import { fromJS } from 'immutable';
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import { Creators } from '../../redux/actions'

import Thread from '../Thread';

const Container = styled.div`
  flex: 1;
`;

class HabitThread extends React.Component {

  render () {
    return (
      <Container>
        <Thread 
          messages={fromJS([])}
          createMessage={this._handleCreateMessage}
          loadMoreMessages={this._handleLoadMoreMessages} />
      </Container>
    );
  }

  _handleCreateMessage = (m) => {
    console.log('_handleDarylCreateMessage', m.get('text'));
  }

  _handleLoadMoreMessages = () => {
    console.log('_handleDarylLoadMoreMessages');
  }

}

export default connect()(HabitThread);
