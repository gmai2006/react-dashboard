import React from 'react';
import {Container, Table} from 'react-bootstrap';

const OrderRecurring = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Reference</th>
                            <th>ProductId</th>
                            <th>ProductName</th>
                            <th>ProductQuantity</th>
                            <th>RecurringId</th>
                            <th>RecurringName</th>
                            <th>RecurringDescription</th>
                            <th>RecurringFrequency</th>
                            <th>RecurringCycle</th>
                            <th>RecurringDuration</th>
                            <th>RecurringPrice</th>
                            <th>Trial</th>
                            <th>TrialFrequency</th>
                            <th>TrialCycle</th>
                            <th>TrialDuration</th>
                            <th>TrialPrice</th>
                            <th>Status</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>482</td>
                            <td>N/A</td>
                            <td>68</td>
                            <td>Lorum Ipsen</td>
                            <td>12</td>
                            <td>57</td>
                            <td>Mark</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>Yearly</td>
                            <td>5 years</td>
                            <td>$256</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>$0</td>
                            <td>Inactive</td>
                            <td>08/11/2012</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default OrderRecurring;
