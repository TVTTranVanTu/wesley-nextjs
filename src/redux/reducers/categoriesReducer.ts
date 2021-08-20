import { categoriesConstants } from '../constants/categoriesConstants';
import { categoriesState } from '../types';
import { categoriesActions } from '../types';
const initialState: categoriesState = {
  pending: false,
  categories: [],
  error: null,
};

const categoriesReducer = (state = initialState, action: categoriesActions) => {
  switch (action.type) {
    case categoriesConstants.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case categoriesConstants.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload.categories,
        error: null,
      };
    case categoriesConstants.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        pending: false,
        categories: [],
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default categoriesReducer;
