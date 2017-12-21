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

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

class Email extends React.Component {

  constructor() {
    super();

    this.state = {showError: false};
  }

  render() {
    const { showError } = this.state;
    const {
      value,
      left,
      opacity,
      onValueChanged,
    } = this.props;
    return (
      <Container {...{left, opacity}} >
        <Label>Last step, the email to join you when it's ready</Label>
        <Input
          type='text'
          value={value.getIn(['email', 'value'])}
          invalid={showError && value.getIn(['email', 'invalid'])}
          placeholder='ex: daryl@daryl.com'
          onKeyDown={this._handleOnKeyDown}
          onChange={(e) => onValueChanged('email', e.target.value, !this._isValid(e.target.value))} />
        <CTA invalid={value.getIn(['email', 'invalid'])} onClick={this._handleCTAClicked}>DONE</CTA>
      </Container>
    )
  }

  _handleCTAClicked = () => {
    this.setState({showError: true});
   
    const { value, } = this.props;
    if (value.getIn(['email', 'invalid'])) return;
    if (this.state.submitted) return;

    const { stepPassed } = this.props;
    this.setState({submitted: true});
    stepPassed();
  }

  _handleOnKeyDown = ({keyCode}) => {
    if (keyCode == 13) this._handleCTAClicked();
  }

  _isValid(value) {
    return value && validateEmail(value);
  }

}

Email.propTypes = {
  value: PropTypes.object.isRequired,
  left: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  stepPassed: PropTypes.func.isRequired,
  onValueChanged: PropTypes.func.isRequired,
};

export default Email;
