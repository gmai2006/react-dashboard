import React from 'react';
import {Container, Table} from 'react-bootstrap';

const LayoutModule = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>LayoutId</th>
                            <th>Code</th>
                            <th>Position</th>
                            <th>SortOrder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>81</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Descending</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default LayoutModule;
