import { fromJS } from 'immutable';
import React from 'react'
import styled from 'styled-components'

import { withAuth } from '../hoc/withAuth';

import { Creators } from '../redux/actions'

import Thread from '../components/Thread';

const Container = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
`;

const thread = [{
  id: 'pouet',
  text: 'In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Replacing meaningful content with placeholder text allows designers to design the form of the content before the content itself has been produced.',
}];

class Index extends React.Component {

  render () {
    return (
      <Container>
        <Thread 
          messages={fromJS(thread)}
          createMessage={this._handleCreateMessage}
          loadMoreMessages={this._handleLoadMoreMessages} />
      </Container>
    );
  }

  _handleCreateMessage = (m) => {
    console.log('_handleCreateMessage', m.get('text'));
    this.props.dispatch(Creators.messageCreate(m.get('text'), {}));
  }

  _handleLoadMoreMessages = () => {
    console.log('_handleLoadMoreMessages');
  }

}

export default withAuth(Index);
