import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Figure, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import './movie-view.scss';

const MovieView = ({ movie }) => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Movie</Breadcrumb.Item>
      </Breadcrumb>
      <Card className="mt-4 mx-auto">
        <Row className="align-items-center">
          <Col lg={6} md={5} sm={12}>
            <Card.Img
              variant="top"
              src={movie.ImageURL}
              className="movie-poster"
              alt="movie-poster"
            />
          </Col>
          <Col lg={6} md={5} sm={12} className="movie-view px-2">
            <Card.Body className="movie-body d-flex flex-column">
              <div className="movie-title mb-3">
                <span className="label"></span>
                <span className="value h1 mb-2">{movie.Title}</span>
              </div>
              <div className="movie-director">
                <p className="label h6 mb-0">Director </p>
                <span className="value">
                  <Link to={`/directors/${movie.Director.Name}`}>
                    <Figure.Caption
                      className="p-0 mb-2 text-decoration-none"
                      variant="link"
                    >
                      {movie.Director.Name}
                    </Figure.Caption>
                  </Link>
                </span>
              </div>
              <div className="movie-genre">
                <p className="label h6 mb-0">Genre</p>
                <span className="value">
                  <Link to={`/genres/${movie.Genre.Name}`}>
                    <Figure.Caption
                      className="p-0 mb-2 text-decoration-none"
                      variant="link"
                    >
                      {movie.Genre.Name}
                    </Figure.Caption>
                  </Link>
                </span>
              </div>
              <div className="movie-description">
                <span className="label h6">Description </span>
                <p className="value m-0">{movie.Description}</p>
              </div>
              <div className="movie-footer pb-2">
                <Card.Footer className=" p-0 pt-4">
                  <Link to={`/directors/${movie.Director.Name}`}>
                    <Button
                      className=" director-btn pb-sm-2 px-3"
                      variant="outline-primary link"
                    >
                      Director
                    </Button>
                  </Link>
                  <Link to={`/genres/${movie.Genre.Name}`}>
                    <Button className="px-4" variant="outline-primary link">
                      Genre
                    </Button>
                  </Link>
                </Card.Footer>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

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
    }),
    ImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieView;
