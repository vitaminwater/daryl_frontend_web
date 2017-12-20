import styled from 'styled-components'
import Router from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';

import { TransitionMotion, spring } from 'react-motion';
const precisionSpring = (value) => spring(value, {precision: 0.1/*, stiffness: 12, damping: 30*/});

const Container = styled.div`
  position: relative;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  overflow: hidden;
`;

class Form extends React.PureComponent {

  constructor() {
    super();

    this.state = {previousStep: 0};
  }

  componentWillReceiveProps(nextProps) {
    const {
      formStep,
    } = this.props;

    this.setState({previousStep: formStep});
  }

  render() {
    const {
      finalRoute,
      steps,
      formStep,
    } = this.props;
    return (
      <TransitionMotion
        didLeave={(config) => {
          if (finalRoute && config.key == STEPS.length - 2) {
            Router.push(finalRoute);
          }
        }}
        willLeave={(config) => {
          const goingNext = config.key < formStep;
          return {
            left: precisionSpring(goingNext ? -25 : 25),
            opacity: precisionSpring(0),
          };
        }}
        willEnter={(config) => {
          const goingNext = this.state.previousStep < formStep;
          return {
            left: goingNext ? 30: -30,
            opacity: 0,
          };
        }}
        styles={[{
          key: ''+formStep,
          style: {
            left: precisionSpring(0),
            opacity: precisionSpring(1),
          }
        },]}>
        {interpolatedStyles => (
          <Container>
            {interpolatedStyles.map(config => {
              const Step = steps[config.key];
              return (
                <Step {...config.style} stepPassed={this.props.stepPassed} key={config.key} />
              );
            })}
          </Container>
        )}
      </TransitionMotion>
    )
  }
}

Form.propTypes = {
  finalRoute: PropTypes.string,
  steps: PropTypes.array.isRequired,
  stepPassed: PropTypes.func.isRequired,
  formStep: PropTypes.number.isRequired,
};

export default Form;
