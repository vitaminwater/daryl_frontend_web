import React from 'react';
import styled from 'styled-components'

import Form from '../Form';
import Welcome from './Welcome';
import Name from './Name';

class HomeForm extends React.Component {

  constructor() {
    super();

    this.state = {step: 0};
  }

  render() {
    return (
      <Form steps={[
        Welcome,
        Name,
      ]} formStep={this.state.step} stepPassed={this._handleStepPassed} />
    )
  }

  _handleStepPassed = () => {
    console.log('puet');
    this.setState({step: this.state.step+1});
  }

}

export default HomeForm; 
