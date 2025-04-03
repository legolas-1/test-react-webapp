import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Modal from "./Modal.js";
import { getData, postData } from '../client/client.js'; // Adjust the import path as necessary


const DataTable = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [response, setResponse] = useState(null);
  const [response1, setResponse1] = useState(null);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'percentage', headerName: 'Percentage', width: 150 },
    { field: 'period', headerName: 'Period', width: 150 },
    { field: 'lastRunAt', headerName: 'LastRunAt', width: 150 },
    { field: 'lastRunStatus', headerName: 'LastRunStatus', width: 150 },
    { field: 'button', headerName: 'Button', width: 150, renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleButtonClick(params.row.id)}
      >
        Click Me
      </Button>
    ),
  },
  ];


  const handleButtonClick = (id) => {
    console.log(`Button clicked for row with id: ${id}`);
    setSelectedId(id);
    setShowModal(true);

    const resp = getData('api/HttpExample?name=ArpitIsHere');
    setResponse(resp);

    const resp1 = postData('api/HttpExample', "some-data");
    setResponse1(resp1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={1}
        checkboxSelection
        disableSelectionOnClick
        renderCell
      />
      <Modal show={showModal} onClose={handleCloseModal} id={selectedId} />
      <div>GET: {response}</div>
      <br>
      </br>
      <div>POST: {response1}</div>
    </div>
  );
};

export default DataTable;
