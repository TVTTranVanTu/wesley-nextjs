import { ICategory } from '../../models';
import { categoriesConstants } from '../constants/categoriesConstants';

export interface categoriesState {
  pending: boolean;
  categories: ICategory[];
  error: string | null;
}

export interface FetchCategoriesSuccesPayload {
  categories: ICategory[];
}

export interface FetchCategoriesFailurePayload {
  error: string;
}

export interface FetchCategoriesRequest {
  type: typeof categoriesConstants.FETCH_CATEGORIES_REQUEST;
}

export interface FetchCategoriesSuccess {
  type: typeof categoriesConstants.FETCH_CATEGORIES_SUCCESS;
  payload: FetchCategoriesSuccesPayload;
}

export interface FetchCategoriesFailure {
  type: typeof categoriesConstants.FETCH_CATEGORIES_FAILURE;
  payload: FetchCategoriesFailurePayload;
}

export type categoriesActions =
  | FetchCategoriesRequest
  | FetchCategoriesSuccess
  | FetchCategoriesFailure;
