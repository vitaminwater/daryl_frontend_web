import { fromJS } from 'immutable';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import Container from '../Form/Container';
import Button from '../../widgets/Button';
import Input from '../../widgets/Input';
import SubTitle from '../../widgets/SubTitle';

const CTA = styled(Button)``;

const Label = styled(SubTitle)`
  font-size: 1.8em;
  width: 30rem;
  max-width: 90%;
  text-align: left;
`;

class Password extends React.Component {

  constructor() {
    super();

    this.state = {showError: false};
  }

  render() {
    const { showError } = this.state;
    const {
      left,
      value,
      opacity,
      onValueChanged,
    } = this.props;
    return (
      <Container {...{left, opacity}} >
        <Label>Type in a password to secure it:</Label>
        <small>at least 5 characters</small>
        <Input
          type='password'
          placeholder='ex: •••••••••••••••••'
          value={value.getIn(['password', 'value'])}
          invalid={showError && value.getIn(['password', 'invalid'])}
          onKeyDown={this._handleOnKeyDown}
          onChange={(e) => onValueChanged('password', e.target.value, !this._isValid(e.target.value))} />
        <CTA invalid={value.getIn(['password', 'invalid'])} onClick={this._handleCTAClicked}>DONE</CTA>
      </Container>
    )
  }

  _handleCTAClicked = (e) => {
    this.setState({showError: true});

    const { value, } = this.props;
    if (value.getIn(['password', 'invalid'])) { e.preventDefault(); return; }

    if (this.state.submitted) return;

    const { stepPassed } = this.props;
    this.setState({submitted: true});
    stepPassed();
  }

  _handleOnKeyDown = ({keyCode}) => {
    if (keyCode == 13) this._handleCTAClicked();
  }

  _isValid(value) {
    return value && value.length > 5;
  }

}

Password.propTypes = {
  value: PropTypes.object.isRequired,
  left: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  stepPassed: PropTypes.func.isRequired,
  onValueChanged: PropTypes.func.isRequired,
};

export default Password;
