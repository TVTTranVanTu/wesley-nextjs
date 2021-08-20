import { categoriesConstants } from '../constants/categoriesConstants';
import {
  FetchCategoriesFailure,
  FetchCategoriesFailurePayload,
  FetchCategoriesRequest,
  FetchCategoriesSuccesPayload,
  FetchCategoriesSuccess,
} from '../types';

export const fetchCategoriesRequest = (): FetchCategoriesRequest => ({
  type: categoriesConstants.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (
  payload: FetchCategoriesSuccesPayload
): FetchCategoriesSuccess => ({
  type: categoriesConstants.FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFailure = (
  payload: FetchCategoriesFailurePayload
): FetchCategoriesFailure => ({
  type: categoriesConstants.FETCH_CATEGORIES_FAILURE,
  payload,
});
