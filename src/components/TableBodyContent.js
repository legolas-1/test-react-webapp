import React from 'react';
import { TableBody } from '@mui/material';
import TableRowItem from './TableRowItem';

const TableBodyContent = ({ data }) => {
  return (
    <TableBody>
      {data.map((item) => (
        <TableRowItem key={item.id} item={item} />
      ))}
    </TableBody>
  );
};

export default TableBodyContent;
