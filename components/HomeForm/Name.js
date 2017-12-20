import { fromJS } from 'immutable';
import React from 'react';
import styled from 'styled-components'

import Container from '../Form/Container';

class Name extends React.Component {

  render() {
    const {
      left,
      opacity,
    } = this.props;
    return (
      <Container {...{left, opacity}} >
        Name
      </Container>
    )
  }

}

export default Name;
