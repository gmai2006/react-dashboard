import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ReturnHistory = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ReturnId</th>
                            <th>ReturnStatusId</th>
                            <th>Notify</th>
                            <th>Comment</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>346</td>
                            <td>2</td>
                            <td>No</td>
                            <td>Lorum Ipsen</td>
                            <td>11/16/2017</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ReturnHistory;
