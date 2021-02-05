import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap';

import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Query from './pages/Query';
import Address from './pages/tables/Address';
import Affiliate from './pages/tables/Affiliate';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Container fluid>
          <Switch>
            <Route path='/' exact component={Overview} />
            <Route path='/query' component={Query} />
            <Route path='/tables/address' component={Address} />
            <Route path='/tables/affiliate' component={Affiliate} />
            
          </Switch>
      </Container>
    </Router>
    </div>
  );
}

export default App;
