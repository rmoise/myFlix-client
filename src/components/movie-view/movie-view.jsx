import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImageURL} />
        </div>
        <div className="movie-body">
          <div className="movie-title">
            <span className="title"></span>
            <span className="value font-weight-bold h1">{movie.Title}</span>
          </div>
          <div className="movie-genre">
            <p className="genre mb-3"></p>
            <span className="value border rounded p-2">{movie.Genre.Name}</span>
          </div>
          <div className="genre-description">
            <p className="genre"></p>
            <p className="value">{movie.Genre.Description}</p>
          </div>
          <div className="movie-description">
            <span className="description font-weight-bold">Overview</span>
            <p className="value">{movie.Description}</p>
          </div>

          <div className="movie-director">
            <span className="director font-weight-bold pr-2">Director</span>
            <span className="value">{movie.Director.Name}</span>
          </div>
          <div className="director-bio">
            <span className="director font-weight-bold pr-2">Bio</span>
            <span className="value">{movie.Director.Bio}</span>
          </div>
          <div className="director-birth">
            <span className="director font-weight-bold pr-2">Birth</span>
            <span className="value">{movie.Director.Birth}</span>
          </div>
          <div className="movie-actors font-weight-bold pr-2">
            <p className="actors">Actors</p>
            <p className="value">{movie.Actors}</p>
          </div>
        </div>
        <Button
          variant="secondary"
          className="mb-3"
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </Button>
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
