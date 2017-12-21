import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import ReactRotatingText from 'react-rotating-text';

import Container from '../Form/Container';
import Button from '../../widgets/Button';
import Title from '../../widgets/Title';
import SubTitle from '../../widgets/SubTitle';

const CTA = styled(Button)``;

const USAGE_EXAMPLES = [
  'work on this client at least 1 hour each day',
  'spend 1h per month doing my accounting',
  'study this subject at least 2h per weeks',
  'start my day by being inbox zero',
  'think about doing this everytime I\'m at that place',
  'check this website whenever this value changes a lot',
  'monitor this API and do this if it says that',
  'study this subject 1h every weeks',
];

class Welcome extends React.Component {

  constructor() {
    super();

    this.state = {submitted: false};
  }

  render() {
    const {
      left,
      opacity,
      onCTAClicked
    } = this.props;
    return (
      <Container {...{left, opacity}} >
        <Title>Daryl,</Title>
        <SubTitle>I should <ReactRotatingText deletingInterval={10} items={USAGE_EXAMPLES} /></SubTitle>
        <CTA onClick={this._handleCTAClicked}>🤖&nbsp;CREATE YOUR DARYL</CTA>
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

Welcome.PropTypes = {
  stepPassed: PropTypes.func.isRequed,
};

export default Welcome;
