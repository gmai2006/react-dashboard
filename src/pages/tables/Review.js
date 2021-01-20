import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Review = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>ProductId</th>
                            <th>CustomerId</th>
                            <th>Author</th>
                            <th>Text</th>
                            <th>Rating</th>
                            <th>Status</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>294</td>
                            <td>37</td>
                            <td>Mark</td>
                            <td>Lorum Ipsen</td>
                            <td>4/5</td>
                            <td>Active</td>
                            <td>11/16/2017</td>
                            <td>06/23/2019</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Review;
