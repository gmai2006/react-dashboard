import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomerHistory = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>Comment</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>82</td>
                            <td>Lorum Ipsen</td>
                            <td>08/11/2013</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomerHistory;
