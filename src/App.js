import React from 'react';
import { createRoot } from 'react-dom/client';
import Table from './components/Table';

const App = () => {
  const data = [
    { id: 1, percentage: 10, period:"28 min", lastRunAt: '31st March 2025', lastRunStatus: "Success" },
    { id: 2, percentage: 5, period: "28 min",lastRunAt: '31st March 2025', lastRunStatus: "Success" },
    { id: 3, percentage: 15, period: "28 days", lastRunAt: '31st March 2025', lastRunStatus: "Success" },
    { id: 4, percentage: 15, period: "28 days", lastRunAt: '31st March 2025', lastRunStatus: "Success" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <Table data={data} />
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
