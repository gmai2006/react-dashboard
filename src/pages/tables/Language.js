import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Language = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Locale</th>
                            <th>Image</th>
                            <th>Directory</th>
                            <th>SortOrder</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Ascending</td>
                            <td>Inactive</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Language;
