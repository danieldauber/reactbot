export function sendMessageRequest(message) {
  return {
    type: '@chat/SEND_MESSAGE_REQUEST',
    payload: { message },
  };
}

export function sendMessageResponse(message) {
  return {
    type: '@chat/SEND_MESSAGE_RESPONSE',
    payload: { message },
  };
}
