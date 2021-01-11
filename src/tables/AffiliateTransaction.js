import React from 'react';
import {Container, Table} from 'react-bootstrap';

const AffiliateTransaction = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>AffiliateId</th>
                            <th>OrderId</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5</td>
                            <td>243</td>
                            <td>Lorem Ipsum</td>
                            <td>$8569</td>
                            <td>02/10/2018</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default AffiliateTransaction;
