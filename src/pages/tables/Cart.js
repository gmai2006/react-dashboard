import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Cart = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ApiId</th>
                            <th>CustomerId</th>
                            <th>SessionId</th>
                            <th>ProductId</th>
                            <th>RecurringId</th>
                            <th>Option</th>
                            <th>Quantity</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>23</td>
                            <td>7</td>
                            <td>55</td>
                            <td>84</td>
                            <td>41</td>
                            <td>Lorum Ipsen</td>
                            <td>21</td>
                            <td>04/22/2004</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Cart;
