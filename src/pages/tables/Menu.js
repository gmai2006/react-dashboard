import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Menu = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>StoreId</th>
                            <th>Type</th>
                            <th>Link</th>
                            <th>SortOrder</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>62</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Ascending</td>
                            <td>Inactive</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Menu;
