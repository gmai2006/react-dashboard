import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Country = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>IsoCode2</th>
                            <th>IsoCode3</th>
                            <th>AddressFormat</th>
                            <th>PostCodeRequired</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Denmark</td>
                            <td>26</td>
                            <td>71</td>
                            <td>Normal</td>
                            <td>95118</td>
                            <td>Active</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Country;
