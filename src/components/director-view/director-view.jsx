import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Moment from 'moment';
import { Button, Card, Col, Figure, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const DirectorView = ({ director, movies }) => {
  const history = useHistory();

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item className="bread-link" onClick={history.goBack}>
          Movie
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Director</Breadcrumb.Item>
      </Breadcrumb>
      <Card className="mt-4 mx-auto" >
        <Card.Body>
          <Card.Title as="h1" className="text-center mt-4">
            {director.Name}
          </Card.Title>
          <div className="director-bio mt-5">
            <span className="label h6">Biography </span>
            <p className="value">{director.Bio}</p>
          </div>
          <div className="director-birthyear">
            <span className="label h6">Birth </span>
            <p className="value">
              {Moment(director.Birth).format('MM/DD/YYYY')}
            </p>
          </div>

          <Card.Title as="h4" className="pt-5">
            Movies directed by {director.Name}{' '}
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

export default DirectorView;
