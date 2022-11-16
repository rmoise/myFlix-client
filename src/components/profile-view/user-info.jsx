import React from 'react';
import { Card } from 'react-bootstrap';

const UserInfo = ({ name, email }) => {
    return (
      <Card>
        <Card.Body>
          <Card.Title as="h4" className="mb-4">
            User Info
          </Card.Title>
          <p>Name: {name}</p>
          <p>e-mail: {email}</p>
        </Card.Body>
      </Card>
    );
}

export default UserInfo;