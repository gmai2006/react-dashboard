import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CategoryPath = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CategoryPath;
