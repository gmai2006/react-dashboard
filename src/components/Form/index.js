import React from 'react';
import {Form} from 'react-bootstrap';

const TextArea = () => {
    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Create your SQL</Form.Label>
                    <Form.Control as="textarea" rows={10} />
                </Form.Group>
            </Form>
        </React.Fragment>
    )
}

export default TextArea;
