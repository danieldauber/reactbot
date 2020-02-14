import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Chatbox, Form } from './styles';
import { sendMessageRequest } from '~/store/modules/chat/actions';
import MessageList from './MessageList';

export default function Chat() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const messageList = useSelector(state => state.chat.messageList);

  function handleSubmit(event) {
    event.preventDefault();
    setValue('');
    if (value) {
      dispatch(sendMessageRequest({ message: value }));
    }
  }

  return (
    <Container>
      <h3>Chat</h3>
      <Chatbox>
        {messageList.map((message, i) => (
          <MessageList
            i={i}
            message={message.message}
            author={message.author}
          />
        ))}
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Envie a sua mensagem"
          />
          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
        </Form>
      </Chatbox>
    </Container>
  );
}
