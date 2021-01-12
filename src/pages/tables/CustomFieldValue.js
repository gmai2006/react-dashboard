import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomFieldValue = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CustomFieldId</th>
                            <th>SortOrder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>82</td>
                            <td>Descending</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomFieldValue;
