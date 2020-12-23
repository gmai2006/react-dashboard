import React from 'react';
import {CardDeck, Card} from 'react-bootstrap';

const CardBox = () => {
    return (
        <React.Fragment>
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

export default CardBox;