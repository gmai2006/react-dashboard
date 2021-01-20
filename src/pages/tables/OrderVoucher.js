import React from 'react';
import {Container, Table} from 'react-bootstrap';

const OrderVoucher = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>VoucherId</th>
                            <th>Description</th>
                            <th>Code</th>
                            <th>FromName</th>
                            <th>FromEmail</th>
                            <th>ToName</th>
                            <th>ToEmail</th>
                            <th>VoucherThemeId</th>
                            <th>Message</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>482</td>
                            <td>17</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>Mark Otto</td>
                            <td>motto@gmail.com</td>
                            <td>John Doe</td>
                            <td>jdoe@outlook.com</td>
                            <td>45</td>
                            <td>N/A</td>
                            <td>$765</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default OrderVoucher;
