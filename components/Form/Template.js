import styled from 'styled-components'
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Button from '../../widgets/Button';
import Title from '../../widgets/Title';
import SubTitle from '../../widgets/SubTitle';

const CTA = styled(Button)``;

class Template extends React.PureComponent {

  constructor() {
    super();

    this.state = {submitted: false};
  }

  render() {
    const {
      left,
      opacity,
    } = this.props;
    return (
      <Container {...{left, opacity}} >
        lol
        <CTA onClick={this._handleCTAClicked}>next</CTA>
      </Container>
    )
  }

  _handleCTAClicked = () => {
    if (this.state.submitted) return;

    const { stepPassed } = this.props;
    this.setState({submitted: true});
    stepPassed();
  }
}

Template.propTypes = {
  left: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  stepPassed: PropTypes.func.isRequired,
};

export default Template;
