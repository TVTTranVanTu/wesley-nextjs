import React from 'react';
import { IMovie } from '../../models';

interface MovieDetailProps {
  movie: IMovie;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }: MovieDetailProps) => {
  return (
    <div className="movie__detail">
      <div className="movie__content">
        <div className="movie__image">
          <a href="" className="image__link">
            <img alt="movie-image" className="image__banner" src={movie.moviethumbnail} />
          </a>
        </div>
        <div className="movie__infor">
          <h2>
            <a className="movie__name" href="">
              {movie.moviename}
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
