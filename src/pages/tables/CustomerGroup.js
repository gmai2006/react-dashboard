import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomerGroup = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Approval</th>
                            <th>SortOrder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Accepted</td>
                            <td>Ascending</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomerGroup;
