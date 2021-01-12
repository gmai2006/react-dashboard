import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CouponHistory = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CouponId</th>
                            <th>OrderId</th>
                            <th>CustomerId</th>
                            <th>Amount</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>42</td>
                            <td>235</td>
                            <td>78</td>
                            <td>$412</td>
                            <td>08/06/2002</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CouponHistory;
