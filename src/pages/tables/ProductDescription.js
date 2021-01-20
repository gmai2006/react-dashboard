import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ProductDescription = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Tag</th>
                            <th>MetaTitle</th>
                            <th>MetaDescription</th>
                            <th>MetaKeyword</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>Lorum Ipsen</td>
                            <td>Lorum Ipsen</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ProductDescription;
