import Dialog from '../lib/DialogFlow';

class ChatTextQueryService {
  async run({ text, parameters = {} }) {
    const request = {
      session: Dialog.sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text,
          // The language used by the client (en-US)
          languageCode: Dialog.dialogFlowSessionLanguageCode,
        },
      },
      queryParams: {
        payload: {
          data: parameters,
        },
      },
    };

    // Send request and log result
    const responses = await Dialog.sessionClient.detectIntent(request);
    // console.log('Detected intent');
    // //const result = responses[0].queryResult;
    // console.log(`  Query: ${result.queryText}`);
    // console.log(`  Response: ${result.fulfillmentText}`);
    // if (result.intent) {
    //   console.log(`  Intent: ${result.intent.displayName}`);
    // } else {
    //   console.log(`  No intent matched.`);
    // }

    return responses;
  }
}

export default new ChatTextQueryService();
