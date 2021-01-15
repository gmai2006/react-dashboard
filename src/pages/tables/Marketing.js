import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Marketing = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Code</th>
                            <th>Clicks</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>09/06/2013</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Marketing;
