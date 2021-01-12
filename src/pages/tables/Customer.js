import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Customer = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>CustomerGroupId</th>
                            <th>StoreId</th>
                            <th>LanguageId</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Fax</th>
                            <th>Password</th>
                            <th>Salt</th>
                            <th>Cart</th>
                            <th>Wishlist</th>
                            <th>Newsletter</th>
                            <th>AddressId</th>
                            <th>CustomField</th>
                            <th>IP</th>
                            <th>Status</th>
                            <th>Approved</th>
                            <th>Safe</th>
                            <th>Token</th>
                            <th>Code</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>107</td>
                            <td>264</td>
                            <td>51</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>motto@gmail.com</td>
                            <td>454-547-1368</td>
                            <td>5551234</td>
                            <td>*******</td>
                            <td>Lorum Ipsen</td>
                            <td>159</td>
                            <td>Yes</td>
                            <td>N/A</td>
                            <td>23</td>
                            <td>Lorum Ipsen</td>
                            <td>902.12.615</td>
                            <td>Inactive</td>
                            <td>No</td>
                            <td>No</td>
                            <td>27</td>
                            <td>N/A</td>
                            <td>09/17/2002</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Customer;
