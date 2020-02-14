import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { sendMessageResponse } from './actions';

export function* sendMessage({ payload }) {
  try {
    const { message } = payload.message;

    const data = {
      text: message,
    };

    const response = yield call(api.post, `/df_text_query/`, data);

    const responseMessage = response.data[0].queryResult.fulfillmentText;

    yield put(sendMessageResponse(responseMessage));
  } catch (error) {
    toast.error('Erro no envio');
    // yield put(());
  }
}

export default all([takeLatest('@chat/SEND_MESSAGE_REQUEST', sendMessage)]);
