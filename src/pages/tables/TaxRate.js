import React from 'react';
import {Container, Table} from 'react-bootstrap';

const TaxRate = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>GeoZoneId</th>
                            <th>Name</th>
                            <th>Rate</th>
                            <th>Type</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>N/A</td>
                            <td>Mark</td>
                            <td>Normal</td>
                            <td>Lorum Ipsen</td>
                            <td>06/12/2015</td>
                            <td>11/22/2018</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default TaxRate;
