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

const DarylIcon = styled.div`
  position: absolute;
  top: 20pt; right: 20pt;

  width: 40pt; height 40pt;
  border-radius: 20pt;

  z-index: 1000;

  background-color: white;
  background-image: url(/static/logo.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.33);
  }
  &:active {
    transform: scale(1.05);
    box-shadow: 2px 2px 7px 0px rgba(0,0,0,0.60);
  }

  transition: all 0.1s ease-out;
`;

const DarylThreadContainer = styled.div`
  position: absolute;
  top: 30pt; right: 30pt;


  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  border-radius: 3pt;
  background-color: white;

  width: ${({ open }) => open ? '400pt' : 0}; height: ${({ open }) => open ? '500pt' : 0};
  opacity: ${({ open }) => open ? 1 : 0};

  transition: all 0.4s ease-out;
`;

const DarylOverlay = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;

  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.4s ease-out;
`;

class Index extends React.Component {

  constructor() {
    super();

    this.state = {showDaryl: false};
  }

  render () {
    const { showDaryl } = this.state;
    return (
      <Container>
        <Thread 
          messages={fromJS([])}
          createMessage={this._handleCreateMessage}
          loadMoreMessages={this._handleLoadMoreMessages} />
        { showDaryl && <DarylOverlay onClick={this._handleClickDarylIcon}/> }
        <DarylThreadContainer open={showDaryl}>
          <Thread 
            messages={fromJS([])}
            createMessage={this._handleDarylCreateMessage}
            loadMoreMessages={this._handleDarylLoadMoreMessages} />
        </DarylThreadContainer>
        <DarylIcon onClick={this._handleClickDarylIcon} />
      </Container>
    );
  }

  _handleDarylCreateMessage = (m) => {
    console.log('_handleDarylCreateMessage', m.get('text'));
  }

  _handleDarylLoadMoreMessages = () => {
    console.log('_handleDarylLoadMoreMessages');
  }

  _handleCreateMessage = (m) => {
    console.log('_handleCreateMessage', m.get('text'));
    this.props.dispatch(Creators.messageCreate(m.get('text'), {}));
  }

  _handleLoadMoreMessages = () => {
    console.log('_handleLoadMoreMessages');
  }

  _handleClickDarylIcon = () => {
    console.log('_handleClickDarylIcon');
    const { showDaryl } = this.state;
    this.setState({showDaryl: !showDaryl});
  }

}

export default withAuth(Index);
