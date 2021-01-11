import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
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
            <FontAwesomeIcon icon={faBars} style={{color: 'black'}}/>
          </Button>
          </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Company Name
              </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        <SlidingPanel
          type={'left'}
          isOpen={openPanel}
          size={20}
          backdropClicked={() => setOpenPanel(false)}
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
                  title: '',
                  itemId: '#',
                  elemBefore: () => <FontAwesomeIcon icon={faTimes} />,
                },
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
        </SlidingPanel>
        
      </React.Fragment>
    )
}

export default Sidebar;
