import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomerLogin = () => {
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
                            <td>132.78.164</td>
                            <td>$521</td>
                            <td>11/23/2014</td>
                            <td>03/06/2018</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomerLogin;
