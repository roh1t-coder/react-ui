import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VoteList() {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await axios.get('https://ideasystem.onrender.com/api/votes/');
        setVotes(response.data);
      } catch (error) {
        console.error('Error fetching votes:', error);
      }
    };
    fetchVotes();
  }, []);

  return (
    <div className="container">
      <h2>Votes</h2>
      <ul className="list-group">
        {votes.map((vote) => (
          <li key={vote.id} className="list-group-item">
            <p>Idea ID: {vote.idea}</p>
            <p>Employee ID: {vote.employee}</p>
            <p>Vote Type: {vote.vote_type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VoteList;