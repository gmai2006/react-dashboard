import React from 'react';
import {Container, Table} from 'react-bootstrap';

const AffiliateLogin = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>IP</th>
                            <th>Total</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>motto@gmail.com</td>
                            <td>92.456.127</td>
                            <td>$8569</td>
                            <td>04/16/2012</td>
                            <td>11/23/2016</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default AffiliateLogin;
