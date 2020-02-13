export function sendMessageRequest(message) {
  return {
    type: '@chat/SEND_MESSAGE_REQUEST',
    payload: { message },
  };
}
