import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Percentage</TableCell>
        <TableCell>Period</TableCell>
        <TableCell>LastRunAt</TableCell>
        <TableCell>LastRunStatus</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
