import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Affiliate = () => {
    return (
        <React.Fragment>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Fax</th>
                            <th>Password</th>
                            <th>Salt</th>
                            <th>Company</th>
                            <th>Website</th>
                            <th>Address1</th>
                            <th>Address2</th>
                            <th>City</th>
                            <th>PostCode</th>
                            <th>CountryId</th>
                            <th>ZoneId</th>
                            <th>Code</th>
                            <th>Commission</th>
                            <th>Tax</th>
                            <th>Payment</th>
                            <th>Cheque</th>
                            <th>Paypal</th>
                            <th>BankName</th>
                            <th>BankBranchNumber</th>
                            <th>BankSwiftCode</th>
                            <th>BankAccountName</th>
                            <th>BankAccountNumber</th>
                            <th>IP</th>
                            <th>Status</th>
                            <th>Approved</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>motto@gmail.com</td>
                            <td>4561462489</td>
                            <td>5551234</td>
                            <td>********</td>
                            <td>?</td>
                            <td>Microsoft</td>
                            <td>www.motto.com</td>
                            <td>355 42nd Ave NE</td>
                            <td></td>
                            <td>Seattle</td>
                            <td>98236</td>
                            <td>1</td>
                            <td>3</td>
                            <td>?</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Affiliate;
