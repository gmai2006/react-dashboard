import React from 'react';
import {Container, Table} from 'react-bootstrap';

const APIsession = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>apiId</th>
                            <th>Token</th>
                            <th>SessionId</th>
                            <th>SessionName</th>
                            <th>IP</th>
                            <th>DateAdded</th>
                            <th>DateModified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>58</td>
                            <td>24</td>
                            <td>33</td>
                            <td>Lorem Ipsum</td>
                            <td>92.178.165</td>
                            <td>02/10/2015</td>
                            <td>01/22/2020</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default APIsession;
