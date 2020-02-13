import React, { setState, useEffect } from 'react';

import { Container, Chatbox } from './styles';
import MessageList from './MessageList';

export default function Chat() {
  const message = 'message';
  const author = 'author';

  return (
    <Container>
      <Chatbox>
        <MessageList pos="right" message={message} author={author} />
        <MessageList pos="left" message={message} author={author} />
        <MessageList pos="right" message={message} author={author} />
        <MessageList pos="left" message={message} author={author} />
      </Chatbox>
    </Container>
  );
}
