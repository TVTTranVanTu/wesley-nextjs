import { all, call, put, takeLatest } from 'redux-saga/effects';
import categoriesAPI from '../../apis/categoriesAPI';
import { ICategory, ListResponse } from '../../models';
import { fetchCategoriesFailure, fetchCategoriesSuccess } from '../actions/categoriesActions';
import { categoriesConstants } from '../constants/categoriesConstants';

function* fetchCategoriesSaga() {
  try {
    const response: ListResponse<ICategory> = yield call(categoriesAPI.getAll);
    console.log(response);
    yield put(
      fetchCategoriesSuccess({
        categories: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchCategoriesFailure({
        error: e.message,
      })
    );
  }
}

function* categoriesSaga() {
  yield all([takeLatest(categoriesConstants.FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga)]);
}
export default categoriesSaga;
