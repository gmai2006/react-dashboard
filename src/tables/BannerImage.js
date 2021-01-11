import React from 'react';
import {Container, Table} from 'react-bootstrap';

const BannerImage = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>BannerId</th>
                            <th>LanguageId</th>
                            <th>Title</th>
                            <th>Link</th>
                            <th>Image</th>
                            <th>SortOrder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>23</td>
                            <td>7</td>
                            <td>Lorum Ipsen</td>
                            <td>Link</td>
                            <td>Image</td>
                            <td>Ascending</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default BannerImage;
