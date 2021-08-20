import { all, fork } from 'redux-saga/effects';
import categoriesSaga from './categoriesSaga';
import moviesSaga from './moviesSaga';
export function* rootSaga() {
  yield all([fork(moviesSaga), fork(categoriesSaga)]);
}
