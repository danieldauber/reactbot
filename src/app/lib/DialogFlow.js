import dialogFlow from 'dialogflow';
import keys from '../../config/dialogflow';

class DialogFlow {
  constructor() {
    const chave =
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2YQEZiVSxedbq\ntcI3JUjBZvJq/x8TPFoNpWWjsygDjDs3dW4PgxM5xy4GGaV/1l6qjkpcbJPeyWQZ\npCn5msrKN5v7HEfvZ9ERXmF7AE3tQvFN/tKldmhvoPGE5u9ycbu6SrqJXPgskV90\n4aw3PjsmW/bBKJvR8mfuBhKx2ufJUGLldPrBGIbBCKX2mzZFCOGCBeG3bv6/meg0\nJVkIXJrAFpqvVAYLGvtQBCXrtXwzCoK9I5DCZH8iJ8QvSzbSjrFKvTGnMTNfehbF\nGt18vYMOTLILMUinwBdACc8U2xp6MtQMCMdRIHSp/EmryBWnTtSy/fyb1TVtvDxi\nG+V5X8VhAgMBAAECggEAC8XWQtY9G9nAGFWUTGgBOs7Q7jw6vsyiCYh4N6l8d0Ip\nnmpbqO+uoYesfmNQbiCh6sOVpEK0BukcJ5WTyhOGbKhLTtnkAN3EPqlHhJ+f6CVu\nmzjMUzcCBdavUINxyILz+dISGYThVksqDMr2iXhgbBj6pDxhVpudvt0wfr+hP7rv\nFiyjb7oMXSjEcTnwDIORBY9LiqnzI/rOA0fRNRjR3XCFaU3emoU9e49Nqsi1XJpr\nHmCjPPGDBR7fiOIfGVn8Jhu/yhyDoGO1N6mlp7POXne7+bmqbrnFjhYMtEa7Y/3+\nvTn2FfYV8uYIOO1GGoTUaiendGMsaB//XaIu8WbHGwKBgQDzr+94og5RlUaZTHHJ\nu2AG3Nlt7P9WFQXhjw2v8HswgsCBhzx9M1Qtb6i9sQzo+c3Tj1H3nMdPQROKGp/N\nLgdED9PuDgAB1+yuGpwYrUV7WzuusPa9K/V5kHRJn/pt5fNErjJnCbGF/Mmk148C\n5UKuUBrN349Wil0/lmCnq7T5twKBgQC/mA2gHRL6AcjKX4a/n/tcf5Nwb03fzEHK\nEPePI2/VomZa4l0wxd/LvYO5rJylLVRNGY/Ijc1biAKrMbTS0NmDMM/LVl4UZfpL\noKuHdZwH7MogKLh2dj3/RYdfvL2Yxx3HoVPUriyGWmrSo8hV+Fyi3MGfGv+JbQN2\nVADq3YIZpwKBgG7B6UrgBTgJbAQjHZi+BGA6Isz2qfsbJQgm9+aem68pzotQxyp0\nmO7p0D0faqm9WFKu0meDp4cbIeFkRnuATycdNor9a/1qgZWEXKxOnMT7a33zysGi\naDjvchtAjhdDK7Vso1X3rusiQRgeLU74mr0VhYlK8iA4VTeghp/OyDuzAoGAdcMm\nDNYSBez217zjfAD/ZRldLGyddwN7JJJNN4PWh38sXoxoL0RQjFBOGOAJ4FT+Te16\nPRE7uhjdWxBQTovkRgjIj/jkFrGfqMB27enSH+ThT+b3ioifDrpTvPqrpq4slbmJ\nZ14vK92DbzkQOBdSCSCbOgpEKtoAmMiFT9ca0l0CgYA3gp94l1UZNAvYZf9tdfOB\ndhSZr+Z/VKMSJfpDCJ8jGRTv8Vb0KMNLg9lrg7JXZVF6BLCbi+QRaOdIpcg1DolO\nOo8CKNO+nNcQeKLoT4CIA05qLG6O/nfc3u0ngnmcRzkVJENdV5ckq8M7S5D1nSlu\nMYkdbaUi5mRhOtrM4lbMXw==\n-----END PRIVATE KEY-----\n';

    const credentials = {
      client_email: keys.googleClientEmail,
      private_key: chave,
    };

    const projectID = keys.googleProjectID;

    this.sessionClient = new dialogFlow.SessionsClient({
      projectID,
      credentials,
    });
    this.sessionPath = this.sessionClient.sessionPath(
      keys.googleProjectID,
      keys.dialogFlowSessionID
    );

    this.dialogFlowSessionLanguageCode = keys.dialogFlowSessionLanguageCode;
  }
}

export default new DialogFlow();
