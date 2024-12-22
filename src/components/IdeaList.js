import React, { useEffect, useState } from 'react';
import axios from 'axios';

function IdeaList() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get('https://ideasystem.onrender.com/api/ideas/');
        setIdeas(response.data);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <div className="container">
      <h2>Ideas</h2>
      <ul className="list-group">
        {ideas.map((idea) => (
          <li key={idea.id} className="list-group-item">
            <h5>{idea.title}</h5>
            <p>{idea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IdeaList;