import React from 'react';
import PropTypes from 'prop-types';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImageURL} />
        </div>
        <div className="movie-title">
          <span className="title">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="description">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-genre">
          <span className="genre">Genre: </span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <div className="genre-description">
          <span className="genre">Description: </span>
          <span className="value">{movie.Genre.Description}</span>
        </div>
        <div className="movie-director">
          <span className="director">Director: </span>
          <span className="value">{movie.Director.Name}</span>
        </div>
        <div className="director-bio">
          <span className="director">Bio: </span>
          <span className="value">{movie.Director.Bio}</span>
        </div>
        <div className="director-birth">
          <span className="director">Birth: </span>
          <span className="value">{movie.Director.Birth}</span>
        </div>
        <div className="movie-actors">
          <span className="actors">Actors: </span>
          <span className="value">{movie.Actors}</span>
        </div>
        <button
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </button>
      </div>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.number.isRequired,
    }),
    Actors: PropTypes.array.isRequired,
  }).isRequired,
};