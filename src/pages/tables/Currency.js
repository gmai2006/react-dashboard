import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Currency = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Code</th>
                            <th>SymbolLeft</th>
                            <th>SymbolRight</th>
                            <th>DecimalPlace</th>
                            <th>Value</th>
                            <th>Status</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorum Ipsen</td>
                            <td>235</td>
                            <td>?</td>
                            <td>?</td>
                            <td>hundreth</td>
                            <td>$412</td>
                            <td>Inactive</td>
                            <td>08/06/2002</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Currency;
