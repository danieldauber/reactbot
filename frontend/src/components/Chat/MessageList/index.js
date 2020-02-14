import React from 'react';

import { Container, Message } from './styles';

export default function MessageList({ i, message, author }) {
  return (
    <Container pos={author}>
      <Message key={i} pos={author}>
        <div>
          <div>{author}</div>
          <p>{message}</p>
        </div>
      </Message>
    </Container>
  );
}
