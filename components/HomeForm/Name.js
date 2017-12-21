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

class Name extends React.Component {

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
        <Label>First, name it:</Label>
        <Input
          type='text'
          value={value.getIn(['name', 'value'])}
          invalid={showError && value.getIn(['name', 'invalid'])}
          placeholder='ex: Daryl'
          onKeyDown={this._handleOnKeyDown}
          onChange={(e) => onValueChanged('name', e.target.value, !this._isValid(e.target.value))} />
        <CTA invalid={value.getIn(['name', 'invalid'])} onClick={this._handleCTAClicked}>NEXT</CTA>
      </Container>
    )
  }

  _handleCTAClicked = (e) => {
    this.setState({showError: true});

    const { value, } = this.props;
    if (value.getIn(['name', 'invalid'])) { e.preventDefault(); return; }

    if (this.state.submitted) return;

    const { stepPassed } = this.props;
    this.setState({submitted: true});
    stepPassed();
  }

  _handleOnKeyDown = ({keyCode}) => {
    if (keyCode == 13) this._handleCTAClicked();
  }

  _isValid(value) {
    return value;
  }

}

Name.propTypes = {
  value: PropTypes.object.isRequired,
  left: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  stepPassed: PropTypes.func.isRequired,
  onValueChanged: PropTypes.func.isRequired,
};

export default Name;
