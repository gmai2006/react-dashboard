import React from 'react';
import {Container, Table} from 'react-bootstrap';

const TaxRule = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>TaxClassId</th>
                            <th>TaxRateId</th>
                            <th>Based</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>34</td>
                            <td>5</td>
                            <td>Lorum Ipsen</td>
                            <td>Normal</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default TaxRule;
