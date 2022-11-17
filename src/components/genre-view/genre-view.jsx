import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Col, Figure, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const GenreView = ({ genre, movies }) => {
  const history = useHistory();

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item className="bread-link" onClick={history.goBack}>
          Movie
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Genre</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="mt-4 mx-auto">
        <Card.Body>
          <Card.Title as="h1" className="text-center mt-4">
            {genre.Name}
          </Card.Title>
          <div className="genre-desc">
            <span className="label h6">Description </span>
            <p className="value">{genre.Description}</p>
          </div>

          <Card.Title as="h4" className="pt-5">
            {genre.Name} Movies
          </Card.Title>
          <Row>
            {!!movies ? (
              movies.map(
                (movie) =>
                  !!movie && (
                    <Col
                      xs={12}
                      md={6}
                      lg={4}
                      key={movie._id}
                      className="fav-movie"
                    >
                      <Figure>
                        <Link to={`/movies/${movie._id}`}>
                          <Figure.Image
                            src={movie.ImageURL}
                            alt={movie.Title}
                          />
                          <Figure.Caption>{movie.Title}</Figure.Caption>
                        </Link>
                      </Figure>
                    </Col>
                  )
              )
            ) : (
              <Col xs={12}>
                <p>No movies</p>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default GenreView;
