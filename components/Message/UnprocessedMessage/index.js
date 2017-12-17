/**
*
* UnprocessedMessage
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import loading from 'components/log/common/img/loading.svg';

import {
  Message,
  MessageIcon,
} from 'components/log/common/layout';

class UnprocessedMessage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { log, first } = this.props;
    return (
      <Message first={first}>
        <MessageIcon src={loading} />
        {log.get('text')}
      </Message>
    );
  }
}

UnprocessedMessage.propTypes = {

};

export default UnprocessedMessage;
