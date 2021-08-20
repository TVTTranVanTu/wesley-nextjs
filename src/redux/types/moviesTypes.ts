import { IMovie } from '../../models';
import { moviesConstants } from '../constants/moviesConstants';

export interface moviesState {
  pending: boolean;
  movies: IMovie[];
  error: string | null;
}

export interface FetchMoviesSuccessPayload {
  movies: IMovie[];
}

export interface FetchMoviesFailurePayload {
  error: string;
}

export interface FetchMoviesRequest {
  type: typeof moviesConstants.FETCH_MOVIES_REQUEST;
}

export type FetchMoviesSuccess = {
  type: typeof moviesConstants.FETCH_MOVIES_SUCCESS;
  payload: FetchMoviesSuccessPayload;
};

export type FetchMoviesFailure = {
  type: typeof moviesConstants.FETCH_MOVIES_FAILURE;
  payload: FetchMoviesFailurePayload;
};

export type moviesActions = FetchMoviesRequest | FetchMoviesSuccess | FetchMoviesFailure;
