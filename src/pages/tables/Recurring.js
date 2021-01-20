import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Recurring = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Price</th>
                            <th>Frequency</th>
                            <th>Duration</th>
                            <th>Cycle</th>
                            <th>TrialStatus</th>
                            <th>TrialPrice</th>
                            <th>TrialFrequency</th>
                            <th>TrialDuration</th>
                            <th>TrialCycle</th>
                            <th>Status</th>
                            <th>SortOrder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$578</td>
                            <td>Yearly</td>
                            <td>7</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Inactive</td>
                            <td>Descending</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Recurring;
