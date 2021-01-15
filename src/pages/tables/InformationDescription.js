import React from 'react';
import {Container, Table} from 'react-bootstrap';

const InformationDescription = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>MetaTitle</th>
                            <th>MetaDescription</th>
                            <th>MetaKeyword</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>N/A</td>
                            <td>Lorum Ipsen</td>
                            <td>Lorum Ipsen</td>
                            <td>Lorum Ipsen</td>
                            <td>Lorum Ipsen</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default InformationDescription;
