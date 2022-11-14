import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, Container, Row } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Card style={{ marginTop: 100, marginBottom: 50, width: '30rem' }}>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center', fontSize: '2rem' }}>
              Welcome
            </Card.Title>
            <Form className="login-border">
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mb-3"
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-5"
                />
              </Form.Group>
            </Form>
            <Button
              className="mr-3"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button variant="secondary" type="button">
              Register
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  onRegistration: PropTypes.func.isRequired,
};
