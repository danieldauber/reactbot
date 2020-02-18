import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import uuidv4 from 'uuid/v4';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import { Container, Chatbox, Form, Scroll } from './styles';
import { sendMessageRequest } from '~/store/modules/chat/actions';
import MessageList from './MessageList';
import Cards from './Cards';

export default function Chat() {
  const cookies = new Cookies();

  const ref = useRef();

  const [value, setValue] = useState('');
  // const [cards, setCards] = useState([]);
  const dispatch = useDispatch();
  const messageList = useSelector(state => state.chat.messageList);

  useEffect(() => {
    if (cookies.get('userID') === undefined) {
      cookies.set('userID', uuidv4(), { path: '/' });
    }
  }, [cookies]);

  function handleSubmit(event) {
    event.preventDefault();
    setValue('');
    if (value) {
      dispatch(sendMessageRequest({ message: value }));
    }
    ref.current.focus();
  }

  return (
    <Container>
      <h3>Chat</h3>
      <Chatbox>
        <Scroll>
          {messageList.map(message => {
            if (message.message) {
              return (
                <MessageList
                  key={message.id}
                  i={message.id}
                  message={message.message}
                  author={message.author}
                />
              );
            }
            if (message.cards.listValue) {
              const cards = message.cards.listValue.values.map((card, i) => {
                return (
                  <Slide index={i}>
                    <Cards key={uuidv4()} card={card} />
                  </Slide>
                );
              });

              return (
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={80}
                  totalSlides={message.cards.listValue.values.length}
                >
                  <Slider>{cards}</Slider>
                  <ButtonBack>Back</ButtonBack>
                  <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
              );
            }
          })}
        </Scroll>
      </Chatbox>
      <Form onSubmit={handleSubmit}>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Envie a sua mensagem"
        />
        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </Form>
    </Container>
  );
}
