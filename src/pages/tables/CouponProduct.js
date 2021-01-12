import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CouponProduct = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CouponId</th>
                            <th>ProductId</th>  
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>42</td>
                            <td>235</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CouponProduct;
