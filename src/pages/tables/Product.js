import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Product = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>SKU</th>
                            <th>UPC</th>
                            <th>EAN</th>
                            <th>JAN</th>
                            <th>ISBN</th>
                            <th>MPN</th>
                            <th>Location</th>
                            <th>Quantity</th>
                            <th>StockStatusId</th>
                            <th>Image</th>
                            <th>ManufacturerId</th>
                            <th>Shipping</th>
                            <th>Price</th>
                            <th>Points</th>
                            <th>TaxClassId</th>
                            <th>DateAvailable</th>
                            <th>Weight</th>
                            <th>WeightClassId</th>
                            <th>Length</th>
                            <th>Width</th>
                            <th>Height</th>
                            <th>LengthClassId</th>
                            <th>Subtract</th>
                            <th>Minimum</th>
                            <th>SortOrder</th>
                            <th>Status</th>
                            <th>Viewed</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorum Ipsen</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>New Zealand</td>
                            <td>60</td>
                            <td>961</td>
                            <td>N/A</td>
                            <td>21498</td>
                            <td>Expedited</td>
                            <td>$765</td>
                            <td>450</td>
                            <td>N/A</td>
                            <td>04/23/2021</td>
                            <td>145</td>
                            <td>lbs</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>Ascending</td>
                            <td>Active</td>
                            <td>No</td>
                            <td>05/09/2020</td>
                            <td>11/28/2020</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Product;
