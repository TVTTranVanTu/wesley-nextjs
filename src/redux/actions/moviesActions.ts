import { moviesConstants } from '../constants/moviesConstants';
import {
  FetchMoviesFailure,
  FetchMoviesFailurePayload,
  FetchMoviesRequest,
  FetchMoviesSuccess,
  FetchMoviesSuccessPayload,
} from '../types';

export const fetchMoviesRequest = (): FetchMoviesRequest => ({
  type: moviesConstants.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (payload: FetchMoviesSuccessPayload): FetchMoviesSuccess => ({
  type: moviesConstants.FETCH_MOVIES_SUCCESS,
  payload,
});
export const fetchMoviesFailure = (payload: FetchMoviesFailurePayload): FetchMoviesFailure => ({
  type: moviesConstants.FETCH_MOVIES_FAILURE,
  payload,
});
