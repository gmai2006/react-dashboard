import React from 'react';
import {Container, Table} from 'react-bootstrap';

const CustomerSearch = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>StoreId</th>
                            <th>LanguageId</th>
                            <th>CustomerId</th>
                            <th>Keyword</th>
                            <th>CategoryId</th>
                            <th>SubCategory</th>
                            <th>Description</th>
                            <th>Products</th>
                            <th>IP</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>617</td>
                            <td>45</td>
                            <td>368</td>
                            <td>Lorum Ipsen</td>
                            <td>121</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>71.121.4519</td>
                            <td>04/19/2017</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default CustomerSearch;
