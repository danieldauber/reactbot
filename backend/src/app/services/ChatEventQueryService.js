import structjson from 'structjson';
import Dialog from '../lib/DialogFlow';

// const credentials = {
//   client_email: dialogflow.googleClientEmail,
//   private_key: dialogflow.googlePrivateKey
// }

// const sessionClient = new dialogFlow.SessionsClient({ projectID: dialogflow.googleProjectID, credentials });
// const sessionPath = sessionClient.sessionPath(dialogflow.googleProjectID, dialogflow.dialogFlowSessionID)

class ChatTextQueryService {
  async run({ event, parameters = {} }) {

    const request = {
      session: Dialog.sessionPath,
      queryInput: {
        event: {
          // The query to send to the dialogflow agent
          name: event,
          parameters: structjson.jsonToStructProto(parameters),
          // The language used by the client (en-US)
          languageCode: Dialog.dialogFlowSessionLanguageCode,
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