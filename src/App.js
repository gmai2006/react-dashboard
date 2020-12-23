import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Col, Row} from 'react-bootstrap';

import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import TablePage from './pages/Table';
import Query from './pages/Query';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Container fluid>
          <Row>
              <Col xs={2}>      
                <Sidebar />
              </Col>
              <Col xs={10}>
                <Switch>
                  <Route path='/' exact component={Overview} />
                  <Route path='/table' component={TablePage} />
                  <Route path='/query' component={Query} />
                </Switch>
              </Col> 
          </Row>
      </Container>
    </Router>
    </div>
  );
}

export default App;
