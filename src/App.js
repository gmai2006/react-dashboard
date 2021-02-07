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
import Test from './pages/tables/Test';
import Test2 from './pages/tables/Test2';
import Test3 from './pages/tables/Test3';

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
            <Route path='/tables/test' component={Test} />
            <Route path='/tables/test2' component={Test2} />
            <Route path='/tables/test3' component={Test3} />
          </Switch>
      </Container>
    </Router>
    </div>
  );
}

export default App;
