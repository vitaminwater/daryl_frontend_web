import { fromJS } from 'immutable';
import React from 'react';
import styled from 'styled-components'

import Form from '../Form';
import Welcome from './Welcome';
import Name from './Name';
import Email from './Email';
import Password from './Password';
import End from './End';

class HomeForm extends React.Component {

  constructor() {
    super();

    this.state = {step: 0, data: fromJS({
      name: {
        value: '',
        invalid: true,
      },
      password: {
        value: '',
        invalid: true,
      },
      email: {
        value: '',
        invalid: true,
      },
    })};
  }

  render() {
    return (
      <Form steps={[
          Welcome,
          Name,
          Password,
          Email,
          End,
        ]}
        value={this.state.data}
        formStep={this.state.step}
        stepPassed={this._handleStepPassed}
        onValueChanged={this._handleValueChanged} />
    )
  }

  _handleValueChanged = (name, value, invalid) => {
    const data = this.state.data
      .setIn([name, 'value'], value)
      .setIn([name, 'invalid'], invalid);
    this.setState({data});
  }

  _handleStepPassed = () => {
    this.setState({step: this.state.step+1});
  }

}

export default HomeForm; 
