import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import {Button, Navbar} from 'react-bootstrap';
import './style.css';

import {Navigation} from 'react-minimal-side-navigation';
import { useHistory, useLocation } from "react-router-dom";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt, faTable, faDatabase, faBars} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const history = useHistory();
    const location = useLocation();
    const [openPanel, setOpenPanel] = useState(false);

    return (
      <React.Fragment>
        <Navbar bg="light">
          <Button variant="link" type="submit" onClick={() => setOpenPanel(true)}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Navbar>

        <div>
        <SlidingPanel
          type={'left'}
          isOpen={openPanel}
          size={25}
        >
          <div className="panel-container">
            <Navigation
              activeItemId={location.pathname}
              onSelect={({itemId}) => {
                  history.push(itemId);
                  setOpenPanel(false)
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
                      title: 'All',
                      itemId: '/table/all',
                    },
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
          </div>
        </SlidingPanel>
        </div>
      </React.Fragment>
    )
}

export default Sidebar;
