import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomField = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Validation</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>SortOrder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorum Ipsen</td>
                            <td>$235</td>
                            <td>Approved</td>
                            <td>Finland</td>
                            <td>Active</td>
                            <td>Ascending</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomField;
