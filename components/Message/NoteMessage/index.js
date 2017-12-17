/**
*
* NoteMessage
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import note from './img/note.svg';

import {
  Message,
  MessageIcon,
} from 'components/log/common/layout';

class NoteMessage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      log,
    } = this.props;
    return (
      <Message>
        <MessageIcon src={note} />
        {log.get('text')}
      </Message>
    );
  }
}

NoteMessage.propTypes = {

};

export default NoteMessage;
