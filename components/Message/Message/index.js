/**
*
* Message
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


import {
  Container,
  Icon,
} from '../common/layout';

class Message extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      message,
    } = this.props;
    return (
      <Container>
        <Icon src='/static/message/common/note.png' />
        {message.get('text')}
      </Container>
    );
  }
}

Message.propTypes = {

};

export default Message;
