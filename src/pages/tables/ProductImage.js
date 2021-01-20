import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ProductImage = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>Image</th>
                            <th>SortOrder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>578</td>
                            <td>N/A</td>
                            <td>Descending</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ProductImage;
