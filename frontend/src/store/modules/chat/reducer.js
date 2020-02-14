import produce from 'immer';

const INICIAL_STATE = {
  message: {},
  messageList: [],
  loading: false,
};

export default function auth(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@chat/SEND_MESSAGE_REQUEST': {
        draft.loading = true;

        const message = {
          author: 'me',
          message: action.payload.message.message,
        };

        draft.messageList.push(message);
        break;
      }
      case '@chat/SEND_MESSAGE_RESPONSE': {
        draft.loading = false;

        const message = {
          author: 'bot',
          message: action.payload.message,
        };

        draft.messageList.push(message);
        break;
      }
      default:
    }
  });
}
