import React from 'react';
import {Container, Table} from 'react-bootstrap';

const VoucherHistory = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>VoucherId</th>
                            <th>OrderId</th>
                            <th>Amount</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2869</td>
                            <td>72192</td>
                            <td>$857</td>
                            <td>03/04/2019</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default VoucherHistory;
