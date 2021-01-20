import React from 'react';
import {Container, Table} from 'react-bootstrap';

const OrderCustomField = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>CustomFieldId</th>
                            <th>CustomFieldValueId</th>
                            <th>Name</th>
                            <th>Value</th>
                            <th>Type</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>482</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Mark</td>
                            <td>$597</td>
                            <td>Lorum Ipsen</td>
                            <td>France</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default OrderCustomField;
