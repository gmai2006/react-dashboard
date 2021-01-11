import React from 'react';
import {Container, Table} from 'react-bootstrap';

const AffiliateActivity = () => {
    return (
        <React.Fragment>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>AffiliateId</th>
                            <th>Key</th>
                            <th>Data</th>
                            <th>IP</th>
                            <th>DateAdded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5</td>
                            <td>?</td>
                            <td>?</td>
                            <td>92.456.127</td>
                            <td>04/16/2012</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    )
}

export default AffiliateActivity;
