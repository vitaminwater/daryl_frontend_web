/**
*
* Loading
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const LoadingDiv = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  & > p {
    position: absolute;
    display: block;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    color: #a0a0a0;
    text-align: center;
    font-size: 25pt;
  }
`;

class Loading extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { text } = this.props;
    return (
      <LoadingDiv>
        <p>
          {text}<br />
          <img src='/static/message/common/loading.svg' />
        </p>
      </LoadingDiv>
    );
  }
}

Loading.propTypes = {

};

export default Loading;
