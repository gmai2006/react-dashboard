import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ProductSpecial= () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>CustomerGroupId</th>
                            <th>Priority</th>
                            <th>Price</th>
                            <th>DateStart</th>
                            <th>DateEnd</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4895</td>
                            <td>49</td>
                            <td>Normal</td>
                            <td>$648</td>
                            <td>06/04/2014</td>
                            <td>11/04/2016</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ProductSpecial;
