import { all, call, takeLatest, put } from 'redux-saga/effects';
import moviesApi from '../../apis/moviesAPI';
import { IMovie, ListResponse } from '../../models';
import { fetchMoviesFailure, fetchMoviesSuccess } from '../actions/moviesActions';
import { moviesConstants } from '../constants/moviesConstants';

function* fetchMoviesSaga() {
  try {
    const response: ListResponse<IMovie> = yield call(moviesApi.getAll);
    console.log(response);

    yield put(
      fetchMoviesSuccess({
        movies: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchMoviesFailure({
        error: e.message,
      })
    );
  }
}

function* moviesSaga() {
  yield all([takeLatest(moviesConstants.FETCH_MOVIES_REQUEST, fetchMoviesSaga)]);
}

export default moviesSaga;
