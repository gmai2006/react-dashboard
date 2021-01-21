import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ZoneToGeoZone = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CountryId</th>
                            <th>ZoneId</th>
                            <th>GeoZoneId</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>48</td>
                            <td>35</td>
                            <td>12</td>
                            <td>02/12/2015</td>
                            <td>06/08/2018</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ZoneToGeoZone;
