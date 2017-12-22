import styled from 'styled-components'
import Router from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';

import { TransitionMotion, spring } from 'react-motion';
const precisionSpring = (value) => spring(value, {precision: 0.1/*, stiffness: 12, damping: 30*/});

const Container = styled.div`
  flex: 1;
  position: relative;
  top: 0; left: 0;
  width: 100%;
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
      ...props,
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
                <Step {...props} {...config.style} key={config.key} />
              );
            })}
          </Container>
        )}
      </TransitionMotion>
    )
  }
}

Form.propTypes = {
  value: PropTypes.object.isRequired,
  finalRoute: PropTypes.string,
  steps: PropTypes.array.isRequired,
  stepPassed: PropTypes.func.isRequired,
  submitted: PropTypes.func.isRequired,
  onValueChanged: PropTypes.func.isRequired,
  formStep: PropTypes.number.isRequired,
};

export default Form;
