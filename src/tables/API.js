import React from 'react';
import {Container, Table} from 'react-bootstrap';

const API = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Key</th>
                            <th>Status</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark Otto</td>
                            <td>72</td>
                            <td>Lorem Ipsum</td>
                            <td>06/24/2011</td>
                            <td>02/10/2018</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default API;
