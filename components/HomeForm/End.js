import styled from 'styled-components'
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Form/Container';
import Title from '../../widgets/Title';
import SubTitle from '../../widgets/SubTitle';

class End extends React.PureComponent {

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

End.propTypes = {
  left: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  stepPassed: PropTypes.func.isRequired,
  onValueChanged: PropTypes.func.isRequired,
};

export default End;
