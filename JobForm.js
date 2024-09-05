import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    company: ''
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/jobs', job);
    setJob({
      title: '',
      description: '',
      location: '',
      company: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" name="title" value={job.title} onChange={handleChange} />
      
      <label>Description</label>
      <input type="text" name="description" value={job.description} onChange={handleChange} />
      
      <label>Location</label>
      <input type="text" name="location" value={job.location} onChange={handleChange} />
      
      <label>Company</label>
      <input type="text" name="company" value={job.company} onChange={handleChange} />

      <button type="submit">Create Job</button>
    </form>
  );
};

export default JobForm;
