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
        break;
      }
      default:
    }
  });
}
