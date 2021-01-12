import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomerIp = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>IP</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>82</td>
                            <td>105.66.409</td>
                            <td>04/10/2004</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomerIp;
