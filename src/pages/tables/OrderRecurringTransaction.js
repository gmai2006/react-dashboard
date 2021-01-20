import React from 'react';
import {Container, Table} from 'react-bootstrap';

const OrderRecurringTransaction = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderRecurringId</th>
                            <th>Reference</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>482</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>$256</td>
                            <td>09/14/2014</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default OrderRecurringTransaction;
