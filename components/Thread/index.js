/*
 *
 * Thread
 *
 */

import styled from 'styled-components';
import { fromJS } from 'immutable';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import messages from './messages';

import Loading from '../Loading';

import FormMessage from '../Message/FormMessage';
import NoteMessage from '../Message/NoteMessage';
import LinkMessage from '../Message/LinkMessage';
import TodoMessage from '../Message/TodoMessage';
import UnprocessedMessage from '../Message/UnprocessedMessage';

import Container from './components/Container';
import MessagesContainer from './components/MessagesContainer';
import MessageContainer from './components/MessageContainer';
import MessageDate from './components/MessageDate';
import MessageTime from './components/MessageTime';
import InputContainer from './components/InputContainer';
import TextArea from './components/TextArea';
import Button from './components/Button';

const LOG_ELEMS = {
  FORM: FormMessage,
  NOTE: NoteMessage,
  LINK: LinkMessage,
  TODO: TodoMessage,
  UNPROCESSED: UnprocessedMessage,
};

export class Thread extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();

    this.state = {text: ''};
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.textarea).focus();
  }

  componentWillReceiveProps(nextProps) {
    const { messages } = this.props;
    const { messages: nextMessages } = nextProps;
    if (messages.size && nextMessages.size && (messages.get('0').get('id') != nextMessages.get('0').get('id'))) {
      setTimeout(() => {
        const elem = ReactDOM.findDOMNode(this.refs.messageScroll);
        elem.scrollTop = elem.scrollHeight;
      }, 30);
    }
  }

  renderMessage(message, i, nextMessage) {
    const type = message.get('type'),
      Message = LOG_ELEMS[type],
      printDaySeparator = !!(!nextMessage || (moment(message.get('inserted_at')).dayOfYear() != moment(nextMessage.get('inserted_at')).dayOfYear()));
    return (
      <div key={message.get('id')}>
        { printDaySeparator && <MessageTime message={message} /> }
        <MessageContainer>
          <MessageDate message={message} />
          <Message message={message} />
        </MessageContainer>
      </div>
    );
  }

  render() {
    const { messages, color, loading } = this.props;
    return (
      <Container color={color}>
        <MessagesContainer ref='messageScroll'>
          {
            messages.map((message, i) => this.renderMessage(message, i, i < messages.size-1 ? messages.get(i+1) : undefined))
          }
        </MessagesContainer>
        <InputContainer>
          <TextArea ref='textarea' value={this.state.text} onChange={({ target: { value: text } }) => this.setState({text})} onKeyPress={this._handleKeyPress} />
          <Button onClick={this._handleSend}>SEND</Button>
        </InputContainer>
        {loading && <Loading />}
      </Container>
    );
  }

  _handleKeyPress = (e) => {
    if (e.charCode == 13 && e.shiftKey == false) {
      this._handleSend(e);
    }
  }

  _handleSend = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const message = fromJS({
      text,
      attrs: {},
    });
    this.props.createMessage(message);
    this.setState({text: ''});
  }
}

Thread.propTypes = {
  createMessage: PropTypes.func.isRequired,
  loadMoreMessages: PropTypes.func.isRequired,
};

export default Thread;
