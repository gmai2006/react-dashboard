import React from 'react';
import {Container, Table} from 'react-bootstrap';

const OrderHistory = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>OrderStatusId</th>
                            <th>Notify</th>
                            <th>Comment</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>482</td>
                            <td>Arriving</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>05/03/2021</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default OrderHistory;
