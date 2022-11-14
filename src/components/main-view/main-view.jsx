import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MovieCard from '../movie-card/movie-card';
import RegistrationView from '../registration-view/registration-view';
import LoginView from '../login-view/login-view';
import MovieView from '../movie-view/movie-view';
import DirectorView from '../director-view/director-view';
import GenreView from '../genre-view/genre-view';
import { API_URL } from '../../utils/constant';
import { Row, Col } from 'react-bootstrap';

import './main-view.scss';
import MyNavbar from '../nav-bar/nav-bar';
import ProfileView from '../profile-view/profile-view';

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
      user: null,
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem('token');

    if (accessToken !== null) {
      this.setState({
        user: JSON.parse(localStorage.getItem('user')),
      });
      this.getMovies(accessToken);
    }
  }

  getMovies(token) {
    this.setState({
      loading: true,
    });
    axios
      .get(`${API_URL}/movies`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          movies: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onLoggedIn(authData) {
    this.setState({
      user: authData.user,
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', JSON.stringify(authData.user));
    this.getMovies(authData.token);
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null,
    });
  }

  //handle fav movie btn clicked
  addFavMovie = (movieId) => {
    let { user } = this.state;
    console.log(movieId);
    const token = localStorage.getItem('token');

    axios
      .post(
        `${API_URL}/users/${user.Username}/movies/${movieId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        const updatedUser = response.data;
        console.log('Movie added to fav list');
        localStorage.setItem('user', JSON.stringify(updatedUser));
        window.location.reload();
      })
      .catch((error) => {
        console.log('Adding a movie to user list failed.', error);
      });
  };

  render() {
    const { movies, user } = this.state;

    return (
      <Router>
        <Row className="main-view justify-content-md-center">
          <Route
            exact
            path="/"
            render={() => {
              if (!user)
                return (
                  <Col className="mt-2 mx-auto">
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              else return <MyNavbar user={user} />;
            }}
          />
          {/* 1. Default path */}
          <Route
            exact
            path="/"
            render={() => {
              if (user && movies.length === 0)
                return (
                  <div className="main-view">
                    No data available to display!!!!
                  </div>
                );

              return movies.map((movie) => (
                <Col md={3} key={movie._id} className="g-3">
                  <MovieCard
                    movie={movie}
                    addFavMovie={this.addFavMovie.bind(this)}
                  />
                </Col>
              ));
            }}
          />
          {/* 2. Register endpoint */}
          <Route
            path="/register"
            render={() => {
              if (user) return <Redirect to="/" />;
              return (
                <Col>
                  <RegistrationView />
                </Col>
              );
            }}
          />
          {/* 3.Movie end point */}
          <Route
            path="/movies/:movieId"
            render={({ match, history }) => {
              if (!user) {
                return (
                  <Col className="mt-2">
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              }
              if (movies.length === 0)
                return (
                  <div className="main-view">
                    No data available to display!!!!
                  </div>
                );

              return (
                <>
                  <MyNavbar />
                  <Col md={8}>
                    <MovieView
                      movie={movies.find((m) => m._id === match.params.movieId)}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                </>
              );
            }}
          />
          {/* 4. Director Route */}
          <Route
            path="/directors/:name"
            render={({ match, history }) => {
              /* If there is no user, the LoginView is rendered. If there is a user logged in,
       the user details are passed as a prop to the LoginView */
              if (!user)
                return (
                  <Col>
                    <LoginView
                      movies={movies}
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );
              // Before the movies have been loaded
              if (movies.length === 0) return <div className="main-view" />;

              return (
                <>
                  <MyNavbar />
                  <Col md={8}>
                    <DirectorView
                      movies={movies.filter(
                        (m) => m.Director.Name === match.params.name
                      )}
                      director={
                        movies.find(
                          (m) => m.Director.Name === match.params.name
                        ).Director
                      }
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                </>
              );
            }}
          />
          {/* 5. Genre Route */}
          <Route
            path="/genres/:name"
            render={({ match, history }) => {
              if (!user) {
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              }
              if (movies.length === 0)
                return (
                  <div className="main-view">
                    No data available to display!!!!
                  </div>
                );

              return (
                <>
                  <MyNavbar />
                  <Col md={8}>
                    <GenreView
                      movies={movies.filter(
                        (m) => m.Genre.Name === match.params.name
                      )}
                      genre={
                        movies.find((m) => m.Genre.Name === match.params.name)
                          .Genre
                      }
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                </>
              );
            }}
          />
          {/* 6. Profile Route */}
          <Route
            path="/profile"
            render={() => {
              if (!user) {
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              }

              if (movies.length === 0)
                return (
                  <div className="main-view">
                    No data available to display!!!!
                  </div>
                );

              return (
                <>
                  <MyNavbar />
                  <Col>
                    <ProfileView user={user} movies={movies} />
                  </Col>
                </>
              );
            }}
          />
        </Row>
      </Router>
    );
  }
}

export default MainView;
