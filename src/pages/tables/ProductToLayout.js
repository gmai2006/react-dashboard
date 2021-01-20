import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ProductToLayout= () => {
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
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ProductToLayout;
