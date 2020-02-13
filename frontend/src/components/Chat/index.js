import React, { setState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Chatbox, Form } from './styles';
import { sendMessageRequest } from '~/store/modules/chat/actions';
import MessageList from './MessageList';

export default function Chat() {
  const dispatch = useDispatch();

  const message = 'message';
  const author = 'author';

  function handleSubmit() {
    dispatch(sendMessageRequest({ message: 'Oi' }));
  }

  return (
    <Container>
      <Chatbox>
        <MessageList pos="right" message={message} author={author} />
        <MessageList pos="left" message={message} author={author} />
        <MessageList pos="right" message={message} author={author} />
        <MessageList pos="left" message={message} author={author} />
        <Form>
          <input type="text" placeholder="Envie a sua mensagem" />
          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
        </Form>
      </Chatbox>
    </Container>
  );
}
