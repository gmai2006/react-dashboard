import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomerOnline = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>URL</th>
                            <th>Referer</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>617</td>
                            <td>Lorum Ipsen</td>
                            <td>Lorum Ipsen</td>
                            <td>05/14/2010</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomerOnline;
