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
import Filter from './pages/tables/Filter';
import FilterDescription from './pages/tables/FilterDescription';
import FilterGroup from './pages/tables/FilterGroup';
import FilterGroupDescription from './pages/tables/FilterGroupDescription';
import GeoZone from './pages/tables/GeoZone';
import Information from './pages/tables/Information';
import InformationDescription from './pages/tables/InformationDescription';
import InformationToLayout from './pages/tables/InformationToLayout';
import InformationToStore from './pages/tables/InformationToStore';
import Language from './pages/tables/Language';
import Layout from './pages/tables/Layout';
import LayoutModule from './pages/tables/LayoutModule';
import LayoutRoute from './pages/tables/LayoutRoute';
import LengthClass from './pages/tables/LengthClass';
import LengthClassDescription from './pages/tables/LengthClassDescription';
import Location from './pages/tables/Location';
import Manufacturer from './pages/tables/Manufacturer';
import ManufacturerToStore from './pages/tables/ManufacturerToStore';
import Marketing from './pages/tables/Marketing';
import Menu from './pages/tables/Menu';
import MenuDescription from './pages/tables/MenuDescription';
import MenuModule from './pages/tables/MenuModule';
import Modification from './pages/tables/Modification';
import Module from './pages/tables/Module';
import Option from './pages/tables/Option';
import OptionDescription from './pages/tables/OptionDescription';
import OptionValue from './pages/tables/OptionValue';
import OptionValueDescription from './pages/tables/OptionValueDescription';

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
            <Route path='/tables/filter' component={Filter} />
            <Route path='/tables/filterdescription' component={FilterDescription} />
            <Route path='/tables/filtergroup' component={FilterGroup} />
            <Route path='/tables/filtergroupdescription' component={FilterGroupDescription} />
            <Route path='/tables/geozone' component={GeoZone} />
            <Route path='/tables/information' component={Information} />
            <Route path='/tables/informationdescription' component={InformationDescription} />
            <Route path='/tables/informationtolayout' component={InformationToLayout} />
            <Route path='/tables/informationtostore' component={InformationToStore} />
            <Route path='/tables/language' component={Language} />
            <Route path='/tables/layout' component={Layout} />
            <Route path='/tables/layoutmodule' component={LayoutModule} />
            <Route path='/tables/layoutroute' component={LayoutRoute} />
            <Route path='/tables/lengthclass' component={LengthClass} />
            <Route path='/tables/lengthclassdescription' component={LengthClassDescription} />
            <Route path='/tables/location' component={Location} />
            <Route path='/tables/manufacturer' component={Manufacturer} />
            <Route path='/tables/manufacturertostore' component={ManufacturerToStore} />
            <Route path='/tables/marketing' component={Marketing} />
            <Route path='/tables/menu' component={Menu} />
            <Route path='/tables/menudescription' component={MenuDescription} />
            <Route path='/tables/menumodule' component={MenuModule} />
            <Route path='/tables/modification' component={Modification} />
            <Route path='/tables/module' component={Module} />
            <Route path='/tables/option' component={Option} />
            <Route path='/tables/optiondescription' component={OptionDescription} />
            <Route path='/tables/optionvalue' component={OptionValue} />
            <Route path='/tables/optionvaluedescription' component={OptionValueDescription} />
          </Switch>
      </Container>
    </Router>
    </div>
  );
}

export default App;
