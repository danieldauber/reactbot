import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {} from './actions';

export function* sendMessage({ payload }) {
  try {
    const { message } = payload;

    const data = {
      text: message,
    };

    const response = yield call(api.post, `/df_text_query/`, data);
    toast.success('Pergunta respondida com sucesso');
  } catch (error) {
    toast.error('Erro no envio');
    // yield put(());
  }
}

export default all([takeLatest('@chat/SEND_MESSAGE_REQUEST', sendMessage)]);
