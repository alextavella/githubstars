import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { ACTIONS_NAME, addUsernameSuccess, addUsernameError } from './actions';

function* addUsername({ username }) {
  const response = yield call(api.get, `/users/${username}/repos`);
  const repos = response.data;
  console.tron.log('Saga', repos);

  if (!repos) {
    toast.error('Username not found.');
    yield put(addUsernameError('Username not found.'));
    return;
  }

  yield put(addUsernameSuccess(repos));

  history.push('/repository');
}

export default all([
  takeLatest(ACTIONS_NAME.ADD_USERNAME_REQUEST, addUsername),
]);
