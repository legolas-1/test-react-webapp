import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';

const TableRowItem = ({ item }) => {
  return (
    <TableRow key={item.id}>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.percentage}</TableCell>
      <TableCell>{item.period}</TableCell>
      <TableCell>{item.lastRunAt}</TableCell>
      <TableCell>{item.lastRunStatus}</TableCell>
      <TableCell>
        <Button variant="contained" color="primary" onClick={() =>_onClick("resume")}>Resume</Button>
        <Button variant="contained" color="secondary" onClick={() => _onClick("stop")}>Stop</Button>
        <Button variant="contained" color="default" onClick={() => _onClick("pause")}>Pause</Button>
      </TableCell>
    </TableRow>
  );
};


const _onClick = (type) => {
  console.log("type:", type);

}
export default TableRowItem;
