/**
*
* UnprocessedMessage
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {
  Message,
  MessageIcon,
} from '../common/layout';

class UnprocessedMessage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { log, first } = this.props;
    return (
      <Message first={first}>
        <MessageIcon src='/static/message/common/loading.svg' />
        {log.get('text')}
      </Message>
    );
  }
}

UnprocessedMessage.propTypes = {

};

export default UnprocessedMessage;
