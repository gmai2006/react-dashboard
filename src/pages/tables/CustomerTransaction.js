import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomerTransaction = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>OrderId</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>617</td>
                            <td>45</td>
                            <td>Lorum Ipsen</td>
                            <td>$247</td>
                            <td>04/19/2017</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomerTransaction;
