import React from 'react';
import {Container, Table} from 'react-bootstrap';

const ProductReward= () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>CustomerGroupId</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4895</td>
                            <td>49</td>
                            <td>648</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default ProductReward;
