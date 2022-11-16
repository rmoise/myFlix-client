import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import FavouriteBtn from './favourite-btn';

import './movie-card.scss';

export default class MovieCard extends React.Component {
  render() {
    const { liked, movie, addFavMovie } = this.props;

    return (
      <Card className="h-100 gap- movie-card">
        <Card.Img variant="top" src={movie.ImageURL} className="movie-img" />
        <Card.Body>
          <Card.Title as="h4">{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="outline-primary link">Open</Button>
          </Link>
          {/*         <FavouriteBtn
          liked={liked}
          addFavMovie={() => addFavMovie(movie._id)}
        /> */}
          <Button
            className="button-movie-view-add-favorite"
            variant="outline-warning"
            size="sm"
            type="button"
            onClick={() => addFavMovie(movie._id)}
          >
            Add to favorites
          </Button>
          {/* <FavouriteBtn
            liked={liked}
            addFavorite={() => addFavMovie(movie._id)}
          /> */}
        </Card.Footer>
      </Card>
    );
  }
}

MovieCard.propTypes = {
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
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
    ImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
