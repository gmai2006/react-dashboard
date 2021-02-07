import React, { useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

const gridStyle = { minHeight: 550 }

const columns = [
  { name: 'id', header: 'Id', defaultVisible: false, type: 'number', defaultWidth: 80 },
  { name: 'firstName', header: 'Name', defaultFlex: 1 },
  { name: 'lastName', header: 'Last', defaultFlex: 1 },
]

const dataSource = [
  {
    id: 1,
    firstName: 'test',
    lastName: 'test2'
  },
  {
    id: 2,
    firstName: 'test1',
    lastName: 'test21'
  },
];

const Test = () => {
  return (
      <ReactDataGrid 
      idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={dataSource}
        />
  )
}

export default Test;