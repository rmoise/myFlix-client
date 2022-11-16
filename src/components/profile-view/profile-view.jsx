import React from 'react';
import axios from 'axios';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
import UserInfo from './user-info';
import { Row, Button, Col, Container } from 'react-bootstrap';
import { API_URL } from '../../utils/constant';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const ProfileView = ({ user, movies }) => {
  const favoriteMovies = user.FavoriteMovies.map((favMovie) =>
    movies.find((movie) => movie._id === favMovie)
  );

  const handleDelFavMovie = (movieId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    axios
      .delete(`${API_URL}/users/${user.Username}/movies/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const updatedUser = response.data;
        console.log('Movie deleted from fav list');
        localStorage.setItem('user', JSON.stringify(updatedUser));
        window.location.reload();
      })
      .catch((error) => {
        console.log('Fav movie deleting failed.', error);
      });
  };

  return (
    <Row className="px-2 px-md-5">
      <Col className='mx-md-5 px-md-5'>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col xs={12} sm={4}>
            <UserInfo name={user.Username} email={user.Email} />
          </Col>
          <Col xs={12} sm={8}>
            <UpdateUser user={user} />
          </Col>
        </Row>
        <FavoriteMovies
          favoriteMovies={favoriteMovies}
          delFavMovie={(id) => handleDelFavMovie(id)}
        />
      </Col>
    </Row>


  );
};

export default ProfileView;
