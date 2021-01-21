import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Zone = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CountryId</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>48</td>
                            <td>New Zealand</td>
                            <td>N/A</td>
                            <td>Active</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Zone;
