/*
 *
 * Thread
 *
 */

import styled from 'styled-components';
import { fromJS } from 'immutable';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import messages from './messages';

import Loading from '../Loading';

import FormMessage from '../Message/FormMessage';
import Message from '../Message/Message';

import Container from './components/Container';
import MessagesContainer from './components/MessagesContainer';
import MessageContainer from './components/MessageContainer';
import MessageDate from './components/MessageDate';
import MessageTime from './components/MessageTime';
import InputContainer from './components/InputContainer';
import TextArea from './components/TextArea';
import Button from './components/Button';

export class Thread extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();

    this.state = {text: '', history: [], historyIndex: -1};
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
      printDaySeparator = !!(!nextMessage || (moment(message.get('at')).dayOfYear() != moment(nextMessage.get('at')).dayOfYear()));
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
    const { messages, loading } = this.props;
    return (
      <Container>
        <MessagesContainer ref='messageScroll'>
          {
            messages.map((message, i) => this.renderMessage(message, i, i < messages.size-1 ? messages.get(i+1) : undefined))
          }
        </MessagesContainer>
        <InputContainer>
          <TextArea ref='textarea' value={this.state.text} onChange={({ target: { value: text } }) => this.setState({text})} onKeyPress={this._handleKeyPress} onKeyDown={this._handleKeyDown} />
          <Button onClick={this._handleSend}>SEND</Button>
        </InputContainer>
        {loading && <Loading />}
      </Container>
    );
  }

  _handleKeyDown = (e) => {
    if (e.keyCode == 38) {
      e.preventDefault();
      const newHistoryIndex = this.state.historyIndex + 1;
      this.setState({historyIndex: newHistoryIndex, text: this.state.history[newHistoryIndex]});
    } else if (e.keyCode == 40) {
      e.preventDefault();
      const newHistoryIndex = this.state.historyIndex - 1;
      if (newHistoryIndex < -1) {
        return;
      }
      this.setState({historyIndex: newHistoryIndex, text: this.state.history[newHistoryIndex]});
    }
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

    const h = this.state.history;
    this.setState({history: [text].concat(h), historyIndex: -1});
  }
}

Thread.propTypes = {
  messages: PropTypes.object.isRequired,
  createMessage: PropTypes.func.isRequired,
  loadMoreMessages: PropTypes.func.isRequired,
};

export default Thread;
