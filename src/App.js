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
import AffiliateActivity from './pages/tables/AffiliateActivity';
import AffiliateLogin from './pages/tables/AffiliateLogin';
import AffiliateTransaction from './pages/tables/AffiliateTransaction';
import API from './pages/tables/API';
import APIip from './pages/tables/API-ip';
import APIsession from './pages/tables/APIsession';
import Attribute from './pages/tables/Attribute';
import AttributeDescription from './pages/tables/AttributeDescription';
import AttributeGroup from './pages/tables/AttributeGroup';
import AttributeGroupDescription from './pages/tables/AttributeGroupDescription';
import Banner from './pages/tables/Banner';
import BannerImage from './pages/tables/BannerImage';
import Cart from './pages/tables/Cart';
import Category from './pages/tables/Category';
import CategoryDescription from './pages/tables/CategoryDescription';
import CategoryFilter from './pages/tables/CategoryFilter';
import CategoryPath from './pages/tables/CategoryPath';
import CategoryToLayout from './pages/tables/CategoryToLayout';
import CategoryToStore from './pages/tables/CategoryToStore';
import Country from './pages/tables/Country';
import Coupon from './pages/tables/Coupon';
import CouponCategory from './pages/tables/CouponCategory';
import CouponHistory from './pages/tables/CouponHistory';
import CouponProduct from './pages/tables/CouponProduct';
import Currency from './pages/tables/Currency';
import CustomField from './pages/tables/CustomField';
import CustomFieldCustomerGroup from './pages/tables/CustomFieldCustomerGroup';
import CustomFieldDescription from './pages/tables/CustomFieldDescription';
import CustomFieldValue from './pages/tables/CustomFieldValue';
import CustomFieldValueDescription from './pages/tables/CustomFieldValueDescription';
import Customer from './pages/tables/Customer';
import CustomerActivity from './pages/tables/CustomerActivity';
import CustomerGroup from './pages/tables/CustomerGroup';
import CustomerGroupDescription from './pages/tables/CustomerGroupDescription';
import CustomerHistory from './pages/tables/CustomerHistory';
import CustomerIp from './pages/tables/CustomerIp';
import CustomerLogin from './pages/tables/CustomerLogin';
import CustomerOnline from './pages/tables/CustomerOnline';
import CustomerReward from './pages/tables/CustomerReward';
import CustomerSearch from './pages/tables/CustomerSearch';
import CustomerTransaction from './pages/tables/CustomerTransaction';
import CustomerWishlist from './pages/tables/CustomerWishlist';
import Download from './pages/tables/Download';
import DownloadDescription from './pages/tables/DownloadDescription';
import Event from './pages/tables/Event';
import Extension from './pages/tables/Extension';

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
            <Route path='/tables/category' component={Category} />
            <Route path='/tables/categorydescription' component={CategoryDescription} />
            <Route path='/tables/categoryfilter' component={CategoryFilter} />
            <Route path='/tables/categorypath' component={CategoryPath} />
            <Route path='/tables/categorytolayout' component={CategoryToLayout} />
            <Route path='/tables/categorytostore' component={CategoryToStore} />
            <Route path='/tables/country' component={Country} />
            <Route path='/tables/coupon' component={Coupon} />
            <Route path='/tables/couponcategory' component={CouponCategory} />
            <Route path='/tables/couponhistory' component={CouponHistory} />
            <Route path='/tables/couponproduct' component={CouponProduct} />
            <Route path='/tables/currency' component={Currency} />
            <Route path='/tables/customfield' component={CustomField} />
            <Route path='/tables/customfieldcustomergroup' component={CustomFieldCustomerGroup} />
            <Route path='/tables/customfielddescription' component={CustomFieldDescription} />
            <Route path='/tables/customfieldvalue' component={CustomFieldValue} />
            <Route path='/tables/customfieldvaluedescription' component={CustomFieldValueDescription} />
            <Route path='/tables/customer' component={Customer} />
            <Route path='/tables/customeractivity' component={CustomerActivity} />
            <Route path='/tables/customergroup' component={CustomerGroup} />
            <Route path='/tables/customergroupdescription' component={CustomerGroupDescription} />
            <Route path='/tables/customerhistory' component={CustomerHistory} />
            <Route path='/tables/customerip' component={CustomerIp} />
            <Route path='/tables/customerlogin' component={CustomerLogin} />
            <Route path='/tables/customeronline' component={CustomerOnline} />
            <Route path='/tables/customerreward' component={CustomerReward} />
            <Route path='/tables/customersearch' component={CustomerSearch} />
            <Route path='/tables/customertransaction' component={CustomerTransaction} />
            <Route path='/tables/customerwishlist' component={CustomerWishlist} />
            <Route path='/tables/download' component={Download} />
            <Route path='/tables/downloaddescription' component={DownloadDescription} />
            <Route path='/tables/event' component={Event} />
            <Route path='/tables/extension' component={Extension} />
          </Switch>
      </Container>
    </Router>
    </div>
  );
}

export default App;
