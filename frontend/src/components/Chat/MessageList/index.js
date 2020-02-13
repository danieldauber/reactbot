import React from 'react';

import { Container, Author } from './styles';

export default function MessageList({ pos, message, author }) {
  return (
    <Container pos={pos}>
      <Author>{author}</Author>
      <p>{message}</p>
    </Container>
  );
}
