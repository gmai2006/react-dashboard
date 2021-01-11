import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap';

import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Address from './tables/Address';
import Affiliate from './tables/Affiliate';
import AffiliateActivity from './tables/AffiliateActivity';
import AffiliateLogin from './tables/AffiliateLogin';
import AffiliateTransaction from './tables/AffiliateTransaction';
import Query from './pages/Query';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Container fluid>
          <Switch>
            <Route path='/' exact component={Overview} />
            <Route path='/tables/address' component={Address} />
            <Route path='/tables/affiliate' component={Affiliate} />
            <Route path='/tables/affiliateactivity' component={AffiliateActivity} />
            <Route path='/tables/affiliatelogin' component={AffiliateLogin} />
            <Route path='/tables/affiliatetransaction' component={AffiliateTransaction} />
            <Route path='/query' component={Query} />
          </Switch>
      </Container>
    </Router>
    </div>
  );
}

export default App;
