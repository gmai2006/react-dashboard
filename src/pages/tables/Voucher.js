import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Voucher = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Code</th>
                            <th>FromName</th>
                            <th>FromEmail</th>
                            <th>ToName</th>
                            <th>ToEmail</th>
                            <th>VoucherThemeId</th>
                            <th>Message</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2869</td>
                            <td>N/A</td>
                            <td>Mark Otto</td>
                            <td>motto@gmail.com</td>
                            <td>John Doe</td>
                            <td>johnd@outlook.com</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>$456</td>
                            <td>Active</td>
                            <td>03/04/2019</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Voucher;
