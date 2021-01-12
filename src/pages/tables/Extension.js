import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Extension = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Extension;
