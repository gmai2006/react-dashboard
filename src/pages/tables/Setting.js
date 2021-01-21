import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Setting = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>StoreId</th>
                            <th>Code</th>
                            <th>Key</th>
                            <th>Value</th>
                            <th>Serialized</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2948</td>
                            <td>371</td>
                            <td>N/A</td>
                            <td>$461</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Setting;
