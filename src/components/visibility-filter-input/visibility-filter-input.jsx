import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/actions';
import { Container, Form } from 'react-bootstrap';


const VisibilityInputFilter = ({visibilityFilter, dispatch}) => {
    return (
      <Container>
        <Form.Control
          className="mb-1 mt-2"
          onChange={(e) => dispatch(setFilter(e.target.value))}
          value={visibilityFilter}
          placeholder="Serach by movie title"
        ></Form.Control>
      </Container>
    );
}

const mapStateToProps = ({visibilityFilter}) => ({
    visibilityFilter
});

export default connect(mapStateToProps)(VisibilityInputFilter);