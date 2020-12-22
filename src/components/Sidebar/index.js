import React from 'react';
import {Nav, Accordion, Card, Button, ButtonGroup, ListGroup, Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <Nav defaultActiveKey="/overview" className="flex-column">
            <Nav.Link as={Link} to="/overview">Overview</Nav.Link>
            <Nav.Link as={Link} to="/table">
                <Dropdown as={ButtonGroup}>
                    <Button variant="link">Table</Button>
                    <Dropdown.Toggle split variant="link" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1st table</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">2nd table</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">3rd table</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Link>
            <Nav.Link as={Link} to="/query">SQL Generator</Nav.Link>
        </Nav>
    )
}

export default Sidebar;
