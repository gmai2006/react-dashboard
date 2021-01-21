import React from 'react';
import {Container, Table} from 'react-bootstrap';

const User = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>UserGroupId</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Salt</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Code</th>
                            <th>IP</th>
                            <th>Status</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>281</td>
                            <td>Marko</td>
                            <td>*******</td>
                            <td>N/A</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>motto@gmail.com</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>92.143.182</td>
                            <td>Active</td>
                            <td>09/19/2019</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default User;
