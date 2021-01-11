import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Address = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Company</th>
                            <th>Address1</th>
                            <th>Address2</th>
                            <th>City</th>
                            <th>PostCode</th>
                            <th>CountryId</th>
                            <th>ZoneId</th>
                            <th>CustomField</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Microsoft</td>
                            <td>355 42nd Ave NE</td>
                            <td></td>
                            <td>Seattle</td>
                            <td>98236</td>
                            <td>1</td>
                            <td>3</td>
                            <td>?</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Address;
