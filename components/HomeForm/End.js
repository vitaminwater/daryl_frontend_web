import styled from 'styled-components'
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Form/Container';
import Title from '../../widgets/Title';
import SubTitle from '../../widgets/SubTitle';

const Instructions = styled.p`
  text-align: center;
`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class End extends React.PureComponent {

  constructor() {
    super();

    this.state = {submitted: false};
  }

  render() {
    const {
      left,
      value,
      opacity,
    } = this.props;
    return (
      <Container {...{left, opacity}} >
        <Title>That's it 🤖</Title>
        <SubTitle><i>{capitalizeFirstLetter(value.getIn(['name', 'value']))}</i> is in the making,</SubTitle>
        <Instructions>He'll contact you by mail for further instructions.</Instructions>
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
