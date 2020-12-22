import React from 'react';
import {CardDeck, Card} from 'react-bootstrap';

const Overview = () => {
    return (
        <React.Fragment>
            <h1 className='text-center'>Overview Page</h1>
            <CardDeck>
                <Card>
                    <Card.Body>
                    <Card.Title>Names</Card.Title>
                    <Card.Text>
                        John Doe
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Languages</Card.Title>
                    <Card.Text>
                        Python
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Line of codes</Card.Title>
                    <Card.Text>
                        Some lines of codes
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </React.Fragment>
    )
}

export default Overview;
