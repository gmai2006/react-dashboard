import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CategoryToLayout = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>LayoutId</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>42</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CategoryToLayout;
