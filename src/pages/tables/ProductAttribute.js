import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ProductAttribute = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorum Ipsen</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ProductAttribute;
