import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './JobList';
import JobForm from './JobForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/create" element={<JobForm />} />
      </Routes>
    </Router>
  );
}

export default App;
