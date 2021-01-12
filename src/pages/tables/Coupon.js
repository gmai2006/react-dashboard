import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Coupon = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Type</th>
                            <th>Discount</th>
                            <th>Logged</th>
                            <th>Shipping</th>
                            <th>Total</th>
                            <th>DateStarted</th>
                            <th>DateEnd</th>
                            <th>UsesTotal</th>
                            <th>UsesCustomer</th>
                            <th>Status</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>26</td>
                            <td>Lorum Ipsen</td>
                            <td>15%</td>
                            <td>Yes</td>
                            <td>10%</td>
                            <td>$465</td>
                            <td>03/18/2012</td>
                            <td>12/26/2018</td>
                            <td>53</td>
                            <td>7</td>
                            <td>Inactive</td>
                            <td>11/25/2016</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Coupon;
