import React from 'react';
import ProgressTimeline from './ProgressTimeline';
import NextBestAction from './NextBestAction';
import CareerGPS from './CareerGPS';
import SkillGap from './SkillGap';
import DreamCompany from './DreamCompany';
import RecruiterMode from './RecruiterMode';
import AchievementBadges from './AchievementBadges';
import AssistantBubble from './AssistantBubble';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2 className="dashboard-title">My Dashboard</h2>
        <p className="dashboard-subtitle">Track your progress, build skills, and prepare for your dream company.</p>
      </div>

      <ProgressTimeline />

      <div className="dashboard-grid">
        <div className="dashboard-col-left">
          <NextBestAction />
          <CareerGPS />
          <RecruiterMode />
        </div>
        <div className="dashboard-col-right">
          <DreamCompany />
          <SkillGap />
          <AchievementBadges />
        </div>
      </div>

      <AssistantBubble />
    </div>
  );
};

export default Dashboard;
