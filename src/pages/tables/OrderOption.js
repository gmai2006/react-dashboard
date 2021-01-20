import React from 'react';
import {Container, Table} from 'react-bootstrap';

const OrderOption = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>OrderProductId</th>
                            <th>ProductOptionId</th>
                            <th>ProductOptionValueId</th>
                            <th>Name</th>
                            <th>Value</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>482</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>$999</td>
                            <td>Lorum Ipsen</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default OrderOption;
