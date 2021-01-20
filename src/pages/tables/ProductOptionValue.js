import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ProductOptionValue = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ProductOptionId</th>
                            <th>ProductId</th>
                            <th>OptionId</th>
                            <th>OptionValueId</th>
                            <th>Quantity</th>
                            <th>Subtract</th>
                            <th>Price</th>
                            <th>PricePrefix</th>
                            <th>Points</th>
                            <th>PointsPrefix</th>
                            <th>Weight</th>
                            <th>WeightPrefix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>578</td>
                            <td>41</td>
                            <td>726</td>
                            <td>913</td>
                            <td>100</td>
                            <td>0</td>
                            <td>$4800</td>
                            <td>N/A</td>
                            <td>998</td>
                            <td>N/A</td>
                            <td>127</td>
                            <td>kg</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ProductOptionValue;
