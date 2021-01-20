import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Return = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>ProductId</th>
                            <th>CustomerId</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Product</th>
                            <th>Model</th>
                            <th>Quantity</th>
                            <th>Opened</th>
                            <th>ReturnReasonId</th>
                            <th>ReturnActionId</th>
                            <th>ReturnStatusId</th>
                            <th>Comment</th>
                            <th>DateOrdered</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>346</td>
                            <td>52</td>
                            <td>25</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>motto@gmail.com</td>
                            <td>2064783429</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>3</td>
                            <td>Yes</td>
                            <td>5</td>
                            <td>1</td>
                            <td>2</td>
                            <td>Broken</td>
                            <td>02/15/2019</td>
                            <td>02/18/2019</td>
                            <td>03/01/2019</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Return;
