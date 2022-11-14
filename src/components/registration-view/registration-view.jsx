import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Button,
  Card,
  CardGroup,
  Container,
  Col,
  Row,
} from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.onRegistration(username);
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card style={{ marginTop: 100, marginBottom: 50, width: '30rem' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontSize: '2rem' }}>
                  Please Register
                </Card.Title>
                <Form>
                  <Form.Group>
                    <Form.Label>Username </Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Enter a username"
                      className="mb-3"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength="8"
                      placeholder="Your password must be 8 or more characters"
                      className="mb-3"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email address"
                      className="mb-3"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Birthday </Form.Label>
                    <Form.Control
                      type="birthday"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      className="mb-5"
                    />
                  </Form.Group>
                  <Button
                    className="mr-3"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>

                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => {
                      props.onBackClick(null);
                    }}
                  >
                    Return to Login Page
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
