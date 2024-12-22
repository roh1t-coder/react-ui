import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IdeaSubmission() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [employee, setEmployee] = useState('');
  const [employees, setEmployees] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://ideasystem.onrender.com/api/employees/');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idea = { title, description, status: 'submitted', employee };
    try {
      await axios.post('https://ideasystem.onrender.com/api/ideas/', idea);
      setTitle('');
      setDescription('');
      setEmployee('');
      setStatus('Idea submitted successfully!');
    } catch (error) {
      setStatus('Error submitting idea.');
    }
  };

  return (
    <div className="container">
      <h2>Submit Idea</h2>
      {status && <div className="alert alert-info">{status}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Employee</label>
          <select
            className="form-control"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            required
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}

export default IdeaSubmission;