import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Modification = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Author</th>
                            <th>Version</th>
                            <th>Link</th>
                            <th>XML</th>
                            <th>Status</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>146</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Inactive</td>
                            <td>01/14/2010</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Modification;
