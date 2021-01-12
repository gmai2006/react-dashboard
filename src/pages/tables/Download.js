import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Download = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>FileName</th>
                            <th>Mask</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>12/20/2014</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Download;
