import React from 'react';

import { Container, Image, Content, Action } from './styles';

export default function Cards({ card }) {
  return (
    <Container>
      <Image>
        <img
          src={card.structValue.fields.image.stringValue}
          width="100%"
          alt=""
        />
      </Image>
      <Content>
        <h2>{card.structValue.fields.header.stringValue}</h2>
        <p>{card.structValue.fields.description.stringValue}</p>
      </Content>
      <Action>
        <button type="button">Este é um link</button>
      </Action>
    </Container>
  );
}
