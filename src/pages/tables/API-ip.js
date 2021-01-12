import React from 'react';
import {Container, Table} from 'react-bootstrap';

const APIip = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>API-Id</th>
                            <th>IP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>64</td>
                            <td>901.42.615</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default APIip;
