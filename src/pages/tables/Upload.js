import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Upload = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Filename</th>
                            <th>Code</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>05/17/2012</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Upload;
