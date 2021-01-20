import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Order = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>InvoiceNo</th>
                            <th>InvoicePrefix</th>
                            <th>StoreId</th>
                            <th>StoreName</th>
                            <th>StoreURL</th>
                            <th>CustomerId</th>
                            <th>CustomerGroupId</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Fax</th>
                            <th>CustomField</th>
                            <th>PaymentFirstName</th>
                            <th>PaymentLastName</th>
                            <th>PaymentCompany</th>
                            <th>PaymentAddress1</th>
                            <th>PaymentAddress2</th>
                            <th>PaymentCity</th>
                            <th>PaymentPostCode</th>
                            <th>PaymentCountry</th>
                            <th>PaymentCountryId</th>
                            <th>PaymentZone</th>
                            <th>PaymentZoneId</th>
                            <th>PaymentAddressFormat</th>
                            <th>PaymentCustomField</th>
                            <th>PaymentMethod</th>
                            <th>PaymentCode</th>
                            <th>ShippingFirstName</th>
                            <th>ShippingLastName</th>
                            <th>ShippingCompany</th>
                            <th>ShippingAddress1</th>
                            <th>ShippingAddress2</th>
                            <th>ShippingCity</th>
                            <th>ShippingPostCode</th>
                            <th>ShippingCountry</th>
                            <th>ShippingCountryId</th>
                            <th>ShippingZone</th>
                            <th>ShippingZoneId</th>
                            <th>ShippingAddressFormat</th>
                            <th>ShippingCustomField</th>
                            <th>ShippingMethod</th>
                            <th>ShippingCode</th>
                            <th>Comment</th>
                            <th>Total</th>
                            <th>OrderStatusId</th>
                            <th>AffiliateId</th>
                            <th>Commission</th>
                            <th>MarketingId</th>
                            <th>Tracking</th>
                            <th>LanguageId</th>
                            <th>CurrencyId</th>
                            <th>CurrencyCode</th>
                            <th>CurrencyValue</th>
                            <th>IP</th>
                            <th>ForwardedIP</th>
                            <th>UserAgent</th>
                            <th>AcceptLanguage</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4615674138749</td>
                            <td>302</td>
                            <td>55</td>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>371</td>
                            <td>21</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>motto@gmail.com</td>
                            <td>4561462489</td>
                            <td>5551234</td>
                            <td>N/A</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Microsoft</td>
                            <td>355 42nd Ave NE</td>
                            <td>N/A</td>
                            <td>Seattle</td>
                            <td>98236</td>
                            <td>USA</td>
                            <td>1</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>House</td>
                            <td>Lorum Ipsen</td>
                            <td>VISA</td>
                            <td>3551917</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>Expedia</td>
                            <td>781 2nd Street E</td>
                            <td>N/A</td>
                            <td>Bellevue</td>
                            <td>92159</td>
                            <td>USA</td>
                            <td>1</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Building Office</td>
                            <td>N/A</td>
                            <td>Expedited</td>
                            <td>946548413933</td>
                            <td>Lorum Ipsen</td>
                            <td>$2,748</td>
                            <td>5591</td>
                            <td>63</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>902.72.816</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>03/15/2016</td>
                            <td>11/23/2020</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Order;
