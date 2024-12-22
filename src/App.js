import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IdeaSubmission from './components/IdeaSubmission';
import IdeaList from './components/IdeaList';
import VoteList from './components/VoteList';
import CollaborationList from './components/CollaborationList';
import RewardList from './components/RewardList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<IdeaList />} />
            <Route path="/submit" element={<IdeaSubmission />} />
            <Route path="/votes" element={<VoteList />} />
            <Route path="/collaborations" element={<CollaborationList />} />
            <Route path="/rewards" element={<RewardList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;