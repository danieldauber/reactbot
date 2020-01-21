import dialogFlow from 'dialogflow';
import keys from '../../config/dialogflow';

class DialogFlow {
  constructor() {
    const {
      googleClientEmail,
      googlePrivateKey,
      googleProjectID,
      dialogFlowSessionID,
      dialogFlowSessionLanguageCode,
    } = keys;

    const credentials = {
      client_email: googleClientEmail,
      private_key: googlePrivateKey,
    };

    const projectID = googleProjectID;

    this.sessionClient = new dialogFlow.SessionsClient({
      projectID,
      credentials,
    });
    this.sessionPath = this.sessionClient.sessionPath(
      googleProjectID,
      dialogFlowSessionID
    );

    this.dialogFlowSessionLanguageCode = dialogFlowSessionLanguageCode;
  }
}

export default new DialogFlow();
