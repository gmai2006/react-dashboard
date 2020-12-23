import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useHistory, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt, faTable, faDatabase} from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Sidebar = () => {
    const history = useHistory();
    const location = useLocation();
    return (
        <Navigation
            activeItemId={location.pathname}
            onSelect={({itemId}) => {
                history.push(itemId);
            }}
            items={[
              {
                title: 'Overview',
                itemId: '/',
                elemBefore: () => <FontAwesomeIcon icon={faFileAlt} />,
              },
              {
                title: 'Table',
                itemId: '/table',
                elemBefore: () => <FontAwesomeIcon icon={faTable} />,
                subNav: [
                  {
                    title: 'Table1',
                    itemId: '/table/table1',
                  },
                  {
                    title: 'Table2',
                    itemId: '/table/table2',
                  },
                  {
                    title: 'Table3',
                    itemId: '/table/table3',
                  },
                  {
                    title: 'Table4',
                    itemId: '/table/table4',
                  },
                  {
                    title: 'Table5',
                    itemId: '/table/table5',
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
    )
}

export default Sidebar;
