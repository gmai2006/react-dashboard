import React from 'react';
import {Form} from 'react-bootstrap';

const Query = () => {
    return (
        <React.Fragment>
            <h1 className='text-center'>Query Page</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Create your SQL</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </React.Fragment>
    )
}

export default Query;
