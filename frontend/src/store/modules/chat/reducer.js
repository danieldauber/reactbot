import produce from 'immer';
import uuidv4 from 'uuid/v4';

const INICIAL_STATE = {
  message: {},
  messageList: [],
  loading: false,
};

export default function chat(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@chat/SEND_MESSAGE_REQUEST': {
        draft.loading = true;

        const message = {
          id: uuidv4(),
          author: 'me',
          message: action.payload.message.message,
        };

        draft.messageList.push(message);
        break;
      }
      case '@chat/SEND_MESSAGE_RESPONSE': {
        draft.loading = false;

        action.payload.message.queryResult.fulfillmentMessages.map(msg => {
          if (msg.message === 'text') {
            const message = {
              id: uuidv4(),
              author: 'bot',
              message: msg.text.text[0],
            };

            draft.messageList.push(message);
          }

          if (msg.message === 'payload') {
            const message = {
              id: uuidv4(),
              author: 'bot',
              cards: msg.payload.fields.cards,
            };

            draft.messageList.push(message);
          }
        });

        break;
      }
      default:
    }
  });
}
