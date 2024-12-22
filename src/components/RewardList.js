import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RewardList() {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await axios.get('https://ideasystem.onrender.com/api/rewards/');
        setRewards(response.data);
      } catch (error) {
        console.error('Error fetching rewards:', error);
      }
    };
    fetchRewards();
  }, []);

  return (
    <div className="container">
      <h2>Rewards</h2>
      <ul className="list-group">
        {rewards.map((reward) => (
          <li key={reward.id} className="list-group-item">
            <p>Employee ID: {reward.employee}</p>
            <p>Reward Type: {reward.reward_type}</p>
            <p>Status: {reward.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RewardList;