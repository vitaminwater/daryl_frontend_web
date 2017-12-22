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

    this.state = {submitted: false, loading: true, timeout: false};
  }

  componentDidMount() {
    const { submitted } = this.props;
    setTimeout(() => {
      const { loading } = this.props;
      this.setState({loading: loading, timeout: true});
    }, 5000);
    submitted();
  }

  componentWillReceiveProps(newProps) {
    const { loading } = this.props;
    const { timeout } = this.state;
    if (loading != newProps.loading && timeout) {
      this.setState({loading: newProps.loading});
    }
  }

  render() {
    const {
      left,
      value,
      opacity,
    } = this.props;
    const { loading } = this.state;
    return (
      <Container {...{left, opacity}} >
        { loading && <SubTitle>Please wait..</SubTitle> }
        { loading && <img src='/static/loading.svg' /> }
        { !loading && <Title>That's it 🤖</Title> }
        { !loading && <SubTitle><i>{capitalizeFirstLetter(value.getIn(['name', 'value']))}</i> is in the making,</SubTitle> }
        { !loading && <Instructions>He'll contact you by email for further instructions.</Instructions> }
      </Container>
    )
  }
}

End.propTypes = {
  left: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  stepPassed: PropTypes.func.isRequired,
  submitted: PropTypes.func.isRequired,
  onValueChanged: PropTypes.func.isRequired,
};

export default End;
