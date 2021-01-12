import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Event = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Trigger</th>
                            <th>Action</th>
                            <th>Status</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>Inactive</td>
                            <td>01/01/2001</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Event;
