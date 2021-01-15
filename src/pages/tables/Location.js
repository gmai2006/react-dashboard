import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Location = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Telephone</th>
                            <th>Fax</th>
                            <th>GeoCode</th>
                            <th>Image</th>
                            <th>Open</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Brussels, Belgium</td>
                            <td>454-547-1368</td>
                            <td>5551234</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>No</td>
                            <td>Lorum Ipsen</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Location;
