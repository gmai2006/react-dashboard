import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ProductOption = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>OptionId</th>
                            <th>Value</th>
                            <th>Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>578</td>
                            <td>N/A</td>
                            <td>$555</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ProductOption;
