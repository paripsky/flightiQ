import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultsTable from '../components/ResultsTable';

const getAssignment = async () => {
  return axios.get('/api/flights/assignment');
};

export const ResultsPage = () => {
  const [assignment, setAssignment] = useState();

  useEffect(() => {
    getAssignment().then(result => {
      setAssignment(result.data.data);
    });
  }, []);

  return (
    <div>
      {assignment ? <ResultsTable data={assignment.flights} /> : 'Loading...'}
    </div>
  );
};

export default ResultsPage;
