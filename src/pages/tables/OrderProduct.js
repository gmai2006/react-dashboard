import React from 'react';
import {Container, Table} from 'react-bootstrap';

const OrderProduct = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>ProductId</th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Tax</th>
                            <th>Reward</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>482</td>
                            <td>23</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>10</td>
                            <td>$789</td>
                            <td>$7890</td>
                            <td>$789</td>
                            <td>$2000</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default OrderProduct;
