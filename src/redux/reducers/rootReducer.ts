import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import categoriesReducer from './categoriesReducer';
const rootReducer = combineReducers({
  categories: categoriesReducer,
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
