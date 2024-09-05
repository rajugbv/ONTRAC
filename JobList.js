import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const response = await axios.get('/api/jobs');
    setJobs(response.data);
  };

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
