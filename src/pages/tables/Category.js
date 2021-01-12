import React from 'react';
import {Container, Table} from 'react-bootstrap';

const Category = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>ParentId</th>
                            <th>Top</th>
                            <th>Column</th>
                            <th>SortOrder</th>
                            <th>Status</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>7</td>
                            <td>55</td>
                            <td>84</td>
                            <td>Ascending</td>
                            <td>Active</td>
                            <td>04/22/2006</td>
                            <td>10/03/2012</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default Category;
