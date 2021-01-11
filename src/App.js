import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap';

import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Query from './pages/Query';
import Address from './tables/Address';
import Affiliate from './tables/Affiliate';
import AffiliateActivity from './tables/AffiliateActivity';
import AffiliateLogin from './tables/AffiliateLogin';
import AffiliateTransaction from './tables/AffiliateTransaction';
import API from './tables/API';
import APIip from './tables/API-ip';
import APIsession from './tables/APIsession';
import Attribute from './tables/Attribute';
import AttributeDescription from './tables/AttributeDescription';
import AttributeGroup from './tables/AttributeGroup';
import AttributeGroupDescription from './tables/AttributeGroupDescription';
import Banner from './tables/Banner';
import BannerImage from './tables/BannerImage';
import Cart from './tables/Cart';

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
            <Route path='/tables/affiliateactivity' component={AffiliateActivity} />
            <Route path='/tables/affiliatelogin' component={AffiliateLogin} />
            <Route path='/tables/affiliatetransaction' component={AffiliateTransaction} />
            <Route path='/tables/api' component={API} />
            <Route path='/tables/apiip' component={APIip} />
            <Route path='/tables/apisession' component={APIsession} />
            <Route path='/tables/attribute' component={Attribute} />
            <Route path='/tables/attributedescription' component={AttributeDescription} />
            <Route path='/tables/attributegroup' component={AttributeGroup} />
            <Route path='/tables/attributegroupdescription' component={AttributeGroupDescription} />
            <Route path='/tables/banner' component={Banner} />
            <Route path='/tables/bannerimage' component={BannerImage} />
            <Route path='/tables/cart' component={Cart} />
          </Switch>
      </Container>
    </Router>
    </div>
  );
}

export default App;
