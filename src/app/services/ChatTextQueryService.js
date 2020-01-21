import dialogFlow from 'dialogflow';
import keys from '../../config/dialogflow';

class ChatTextQueryService {
  async run({ text, parameters = {} }) {
    const sessionClient = new dialogFlow.SessionsClient();
    const sessionPath = sessionClient.sessionPath(
      keys.googleProjectID,
      keys.dialogFlowSessionID
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text,
          // The language used by the client (en-US)
          languageCode: keys.dialogFlowSessionLanguageCode,
        },
      },
      queryParams: {
        payload: {
          data: parameters,
        },
      },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
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
