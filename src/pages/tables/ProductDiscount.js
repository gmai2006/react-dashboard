import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ProductDiscount = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>CustomerGroupId</th>
                            <th>Quantity</th>
                            <th>Priority</th>
                            <th>Price</th>
                            <th>DateStarted</th>
                            <th>DateEnd</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>482</td>
                            <td>67</td>
                            <td>5</td>
                            <td>Normal</td>
                            <td>$299</td>
                            <td>03/25/2016</td>
                            <td>10/25/2020</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ProductDiscount;
