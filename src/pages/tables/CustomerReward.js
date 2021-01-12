import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomerReward = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>OrderId</th>
                            <th>Description</th>
                            <th>Points</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>617</td>
                            <td>71</td>
                            <td>Lorum Ipsen</td>
                            <td>1027</td>
                            <td>07/24/2018</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomerReward;
