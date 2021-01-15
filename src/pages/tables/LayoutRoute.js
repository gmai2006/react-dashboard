import React from 'react';
import {Container, Table} from 'react-bootstrap';

const LayoutRoute = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>LayoutId</th>
                            <th>StoreId</th>
                            <th>Route</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>81</td>
                            <td>246</td>
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default LayoutRoute;
