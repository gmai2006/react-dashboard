import React from 'react';
import {Container, Table} from 'react-bootstrap';

const OrderTotal = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Code</th>
                            <th>Title</th>
                            <th>Value</th>
                            <th>SortOrder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>482</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>$78</td>
                            <td>Descending</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default OrderTotal;
