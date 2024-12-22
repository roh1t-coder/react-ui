import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CollaborationList() {
  const [collaborations, setCollaborations] = useState([]);

  useEffect(() => {
    const fetchCollaborations = async () => {
      try {
        const response = await axios.get('https://ideasystem.onrender.com/api/collaborations/');
        setCollaborations(response.data);
      } catch (error) {
        console.error('Error fetching collaborations:', error);
      }
    };
    fetchCollaborations();
  }, []);

  return (
    <div className="container">
      <h2>Collaborations</h2>
      <ul className="list-group">
        {collaborations.map((collaboration) => (
          <li key={collaboration.id} className="list-group-item">
            <p>Idea ID: {collaboration.idea}</p>
            <p>Status: {collaboration.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollaborationList;