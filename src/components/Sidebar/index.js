import React, { useState } from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import {Button, Navbar} from 'react-bootstrap';
import './style.css';

import {Navigation} from 'react-minimal-side-navigation';
import { useHistory, useLocation } from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt, faTable, faDatabase, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const history = useHistory();
    const location = useLocation();
    const [openPanel, setOpenPanel] = useState(false);

    return (
      <React.Fragment>
        <Navbar bg="light">
          <Navbar.Brand>
          <Button className='shadow-none' variant="link" type="submit" onClick={() => setOpenPanel(true)}>
            <FontAwesomeIcon icon={faBars} style={{color: '#2d3748'}}/>
          </Button>
          </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Company Name
              </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        <SlidingPane
          closeIcon={<FontAwesomeIcon icon={faTimes} />}
          isOpen={openPanel}
          from="left"
          width="350px"
          onRequestClose={() => setOpenPanel(false)}
        >
          <div className="panel-container">
            <Navigation
              activeItemId={location.pathname}
              onSelect={({itemId}) => {
                  history.push(itemId);
                  setOpenPanel(false);
              }}
              items={[
                {
                  title: 'Overview',
                  itemId: '/',
                  elemBefore: () => <FontAwesomeIcon icon={faFileAlt} />,
                },
                {
                  title: 'Tables',
                  itemId: '/table',
                  elemBefore: () => <FontAwesomeIcon icon={faTable} />,
                  subNav: [
                    {
                      title: 'Address',
                      itemId: '/tables/address',
                    },
                    {
                      title: 'Affiliate',
                      itemId: '/tables/affiliate',
                    },
                    {
                      title: 'AffiliateActivity',
                      itemId: '/tables/affiliateactivity',
                    },
                    {
                      title: 'AffiliateLogin',
                      itemId: '/tables/affiliatelogin',
                    },
                    {
                      title: 'AffiliateTransaction',
                      itemId: '/tables/affiliatetransaction',
                    },
                    {
                      title: 'API',
                      itemId: '/tables/api',
                    },
                    {
                      title: 'API-IP',
                      itemId: '/tables/apiip',
                    },
                    {
                      title: 'API-Session',
                      itemId: '/tables/apisession',
                    },
                    {
                      title: 'Attribute',
                      itemId: '/tables/attribute',
                    },
                    {
                      title: 'AttributeDescription',
                      itemId: '/tables/attributedescription',
                    },
                    {
                      title: 'AttributeGroup',
                      itemId: '/tables/attributegroup',
                    },
                    {
                      title: 'AttributeGroupDescription',
                      itemId: '/tables/attributegroupdescription',
                    },
                    {
                      title: 'Banner',
                      itemId: '/tables/banner',
                    },
                    {
                      title: 'BannerImage',
                      itemId: '/tables/bannerimage',
                    },
                    {
                      title: 'Cart',
                      itemId: '/tables/cart',
                    },
                    {
                      title: 'Category',
                      itemId: '/tables/category',
                    },
                    {
                      title: 'CategoryDescription',
                      itemId: '/tables/categorydescription',
                    },
                    {
                      title: 'CategoryFilter',
                      itemId: '/tables/categoryfilter',
                    },
                    {
                      title: 'CategoryPath',
                      itemId: '/tables/categorypath',
                    },
                    {
                      title: 'CategoryToLayout',
                      itemId: '/tables/categorytolayout',
                    },
                    {
                      title: 'CategoryToStore',
                      itemId: '/tables/categorytostore',
                    },
                    {
                      title: 'Country',
                      itemId: '/tables/country',
                    },
                    {
                      title: 'Coupon',
                      itemId: '/tables/coupon',
                    },
                    {
                      title: 'CouponCategory',
                      itemId: '/tables/couponcategory',
                    },
                    {
                      title: 'CouponHistory',
                      itemId: '/tables/couponhistory',
                    },
                    {
                      title: 'CouponProduct',
                      itemId: '/tables/couponproduct',
                    },
                    {
                      title: 'Currency',
                      itemId: '/tables/currency',
                    },
                    {
                      title: 'CustomField',
                      itemId: '/tables/customfield',
                    },
                    {
                      title: 'CustomFieldCustomerGroup',
                      itemId: '/tables/customfieldcustomergroup',
                    },
                    {
                      title: 'CustomFieldDescription',
                      itemId: '/tables/customfielddescription',
                    },
                    {
                      title: 'CustomFieldValue',
                      itemId: '/tables/customfieldvalue',
                    },
                    {
                      title: 'Customer',
                      itemId: '/tables/customer',
                    },
                    {
                      title: 'CustomerActivity',
                      itemId: '/tables/customeractivity',
                    },
                    {
                      title: 'CustomerGroup',
                      itemId: '/tables/customergroup',
                    },
                    {
                      title: 'CustomerGroupDescription',
                      itemId: '/tables/customergroupdescription',
                    },
                    {
                      title: 'CustomerHistory',
                      itemId: '/tables/customerhistory',
                    },
                    {
                      title: 'CustomerIP',
                      itemId: '/tables/customerip',
                    },
                    {
                      title: 'CustomerLogin',
                      itemId: '/tables/customerlogin',
                    },
                    {
                      title: 'CustomerOnline',
                      itemId: '/tables/customeronline',
                    },
                    {
                      title: 'CustomerReward',
                      itemId: '/tables/customerreward',
                    },
                    {
                      title: 'CustomerSearch',
                      itemId: '/tables/customersearch',
                    },
                    {
                      title: 'CustomerTransaction',
                      itemId: '/tables/customertransaction',
                    },
                    {
                      title: 'CustomerWishlist',
                      itemId: '/tables/customerwishlist',
                    },
                    {
                      title: 'Download',
                      itemId: '/tables/download',
                    },
                    {
                      title: 'DownloadDescription',
                      itemId: '/tables/downloaddescription',
                    },
                    {
                      title: 'Event',
                      itemId: '/tables/event',
                    },
                    {
                      title: 'Extension',
                      itemId: '/tables/extension',
                    },
                    {
                      title: 'Filter',
                      itemId: '/tables/filter',
                    },
                    {
                      title: 'FilterDescription',
                      itemId: '/tables/filterdescription',
                    },
                    {
                      title: 'FilterGroup',
                      itemId: '/tables/filtergroup',
                    },
                    {
                      title: 'FilterGroupDescription',
                      itemId: '/tables/filtergroupdescription',
                    },
                    {
                      title: 'GeoZone',
                      itemId: '/tables/geozone',
                    },
                    {
                      title: 'Information',
                      itemId: '/tables/information',
                    },
                    {
                      title: 'InformationDescription',
                      itemId: '/tables/informationdescription',
                    },
                    {
                      title: 'InformationToLayout',
                      itemId: '/tables/informationtolayout',
                    },
                    {
                      title: 'InformationToStore',
                      itemId: '/tables/informationtoStore',
                    },
                    {
                      title: 'Language',
                      itemId: '/tables/language',
                    },
                    {
                      title: 'Layout',
                      itemId: '/tables/layout',
                    },
                    {
                      title: 'LayoutModule',
                      itemId: '/tables/layoutmodule',
                    },
                    {
                      title: 'LayoutRoute',
                      itemId: '/tables/layoutroute',
                    },
                    {
                      title: 'LengthClass',
                      itemId: '/tables/lengthclass',
                    },
                    {
                      title: 'LengthClassDescription',
                      itemId: '/tables/lengthclassdescription',
                    },
                    {
                      title: 'Location',
                      itemId: '/tables/location',
                    },
                    {
                      title: 'Manufacturer',
                      itemId: '/tables/manufacturer',
                    },
                    {
                      title: 'ManufacturerToStore',
                      itemId: '/tables/manufacturertostore',
                    },
                    {
                      title: 'Marketing',
                      itemId: '/tables/marketing',
                    },
                    {
                      title: 'Menu',
                      itemId: '/tables/menu',
                    },
                    {
                      title: 'MenuDescription',
                      itemId: '/tables/menudescription',
                    },
                    {
                      title: 'MenuModule',
                      itemId: '/tables/menumodule',
                    },
                    {
                      title: 'Modification',
                      itemId: '/tables/modification',
                    },
                    {
                      title: 'Module',
                      itemId: '/tables/module',
                    },
                    {
                      title: 'Option',
                      itemId: '/tables/option',
                    },
                    {
                      title: 'OptionDescription',
                      itemId: '/tables/optiondescription',
                    },
                    {
                      title: 'OptionValue',
                      itemId: '/tables/optionvalue',
                    },
                    {
                      title: 'OptionValueDescription',
                      itemId: '/tables/optionvaluedescription',
                    },
                    {
                      title: 'Order',
                      itemId: '/tables/order',
                    },
                    {
                      title: 'OrderCustomField',
                      itemId: '/tables/ordercustomfield',
                    },
                    {
                      title: 'OrderHistory',
                      itemId: '/tables/orderhistory',
                    },
                    {
                      title: 'OrderOption',
                      itemId: '/tables/orderoption',
                    },
                    {
                      title: 'OrderProduct',
                      itemId: '/tables/orderproduct',
                    },
                    {
                      title: 'OrderRecurring',
                      itemId: '/tables/orderrecurring',
                    },
                    {
                      title: 'OrderRecurringTransaction',
                      itemId: '/tables/orderrecurringtransaction',
                    },
                    {
                      title: 'OrderStatus',
                      itemId: '/tables/orderstatus',
                    },
                    {
                      title: 'OrderTotal',
                      itemId: '/tables/ordertotal',
                    },
                    {
                      title: 'OrderVoucher',
                      itemId: '/tables/ordervoucher',
                    },
                    {
                      title: 'Product',
                      itemId: '/tables/product',
                    },
                    {
                      title: 'ProductAttribute',
                      itemId: '/tables/productattribute',
                    },
                    {
                      title: 'ProductDescription',
                      itemId: '/tables/productdescription',
                    },
                    {
                      title: 'ProductDiscount',
                      itemId: '/tables/productdiscount',
                    },
                    {
                      title: 'ProductFilter',
                      itemId: '/tables/productfilter',
                    },
                    {
                      title: 'ProductImage',
                      itemId: '/tables/productimage',
                    },
                    {
                      title: 'ProductOption',
                      itemId: '/tables/productoption',
                    },
                    {
                      title: 'ProductOptionValue',
                      itemId: '/tables/productoptionvalue',
                    },
                    {
                      title: 'ProductRecurring',
                      itemId: '/tables/productrecurring',
                    },
                    {
                      title: 'ProductRelated',
                      itemId: '/tables/productrelated',
                    },
                    {
                      title: 'ProductReward',
                      itemId: '/tables/productreward',
                    },
                    {
                      title: 'ProductSpecial',
                      itemId: '/tables/productspecial',
                    },
                    {
                      title: 'ProductToCategory',
                      itemId: '/tables/producttocategory',
                    },
                    {
                      title: 'ProductToDownload',
                      itemId: '/tables/producttodownload',
                    },
                    {
                      title: 'ProductToLayout',
                      itemId: '/tables/producttolayout',
                    },
                    {
                      title: 'ProductToStore',
                      itemId: '/tables/producttostore',
                    },
                    {
                      title: 'Recurring',
                      itemId: '/tables/recurring',
                    },
                    {
                      title: 'RecurringDescription',
                      itemId: '/tables/recurringdescription',
                    },
                    {
                      title: 'Return',
                      itemId: '/tables/return',
                    },
                    {
                      title: 'ReturnAction',
                      itemId: '/tables/returnaction',
                    },
                    {
                      title: 'ReturnHistory',
                      itemId: '/tables/returnhistory',
                    },
                    {
                      title: 'ReturnReason',
                      itemId: '/tables/returnreason',
                    },
                    {
                      title: 'ReturnStatus',
                      itemId: '/tables/returnstatus',
                    },
                    {
                      title: 'Review',
                      itemId: '/tables/review',
                    },
                    {
                      title: 'Setting',
                      itemId: '/tables/setting',
                    },
                    {
                      title: 'StockStatus',
                      itemId: '/tables/stockstatus',
                    },
                    {
                      title: 'Store',
                      itemId: '/tables/store',
                    },
                    {
                      title: 'TaxClass',
                      itemId: '/tables/taxclass',
                    },
                    {
                      title: 'TaxRate',
                      itemId: '/tables/taxrate',
                    },
                    {
                      title: 'TaxRateToCustomerGroup',
                      itemId: '/tables/taxratetocustomergroup',
                    },
                    {
                      title: 'TaxRule',
                      itemId: '/tables/taxrule',
                    },
                    {
                      title: 'Theme',
                      itemId: '/tables/theme',
                    },
                    {
                      title: 'Translation',
                      itemId: '/tables/translation',
                    },
                    {
                      title: 'Upload',
                      itemId: '/tables/upload',
                    },
                    {
                      title: 'UrlAlias',
                      itemId: '/tables/urlalias',
                    },
                    {
                      title: 'User',
                      itemId: '/tables/user',
                    },
                    {
                      title: 'UserGroup',
                      itemId: '/tables/usergroup',
                    },
                    {
                      title: 'Voucher',
                      itemId: '/tables/voucher',
                    },
                    {
                      title: 'VoucherHistory',
                      itemId: '/tables/voucherhistory',
                    },
                    {
                      title: 'VoucherTheme',
                      itemId: '/tables/vouchertheme',
                    },
                    {
                      title: 'VoucherThemeDescription',
                      itemId: '/tables/voucherthemedescription',
                    },
                    {
                      title: 'WeightClass',
                      itemId: '/tables/weightclass',
                    },
                    {
                      title: 'WeightClassDescription',
                      itemId: '/tables/weightclassdescription',
                    },
                    {
                      title: 'Zone',
                      itemId: '/tables/zone',
                    },
                    {
                      title: 'ZoneToGeoZone',
                      itemId: '/tables/zonetogeozone',
                    },
                  ],
                },
                {
                  title: 'SQL Generator',
                  itemId: '/query',
                  elemBefore: () => <FontAwesomeIcon icon={faDatabase} />,
                },
              ]}
            />
          </div>
        </SlidingPane>
      </React.Fragment>
    )
}

export default Sidebar;
