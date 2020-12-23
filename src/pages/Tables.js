import React from 'react';
import DataTable from '../components/Table';
import TablePagination from '../components/Pagination';

const AllTables = () => {
    return (
        <React.Fragment>
            <DataTable />
            <TablePagination />
        </React.Fragment>
    )
}

export default AllTables;
