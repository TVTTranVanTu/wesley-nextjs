import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesRequest } from '../../redux/actions/moviesActions';
import { RootState } from '../../redux/reducers/rootReducer';
import MovieDetail from './MovieDetail';

const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const { pending, movies, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesRequest());
  }, [dispatch]);
  return (
    <div className="movies">
      <h2 className="title">Top phim nhiều lượt xem</h2>
      <div className="movies__list">
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          movies?.map((movie, index) => <MovieDetail key={index} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default Movies;
