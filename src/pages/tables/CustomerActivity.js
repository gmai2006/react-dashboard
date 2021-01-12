import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomerActivity = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>Key</th>
                            <th>Data</th>
                            <th>IP</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>72</td>
                            <td>293</td>
                            <td>Lorum Ipsen</td>
                            <td>104.84.6642</td>
                            <td>05/19/2017</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomerActivity;
