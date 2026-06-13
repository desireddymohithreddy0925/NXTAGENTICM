import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { DashboardAPI } from '../../api/client';
import './NextBestAction.css';

const NextBestAction = () => {
  const [actionData, setActionData] = useState(null);

  useEffect(() => {
    const fetchAction = async () => {
      try {
        const response = await DashboardAPI.getNextAction();
        setActionData(response.action);
      } catch (err) {
        console.error('Failed to perfectly fetch next action', err);
      }
    };
    fetchAction();
  }, []);

  const handleComplete = async () => {
    try {
      const response = await DashboardAPI.completeNextAction();
      setActionData(response.action);
    } catch (err) {
      console.error('Failed to perfectly complete action', err);
    }
  };

  if (!actionData) return <div>Loading...</div>;
  return (
    <div className="nba-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="nba-header">
        <div className="nba-title-wrap">
          <Target size={20} />
          <span className="nba-title">Your Next Best Action</span>
        </div>
        <div className="nba-score-wrap">
          <div className="nba-score-label">Overall Readiness</div>
          <div className="nba-score-value">{actionData.overallReadiness}/100</div>
        </div>
      </div>

      <div className="nba-content">
        <h3 className="nba-action-title">{actionData.title}</h3>
        
        <div className="nba-meta">
          <div className="nba-meta-item">
            <TrendingUp size={16} />
            <span>{actionData.impact}</span>
          </div>
          <div className="nba-meta-item">
            <Clock size={16} />
            <span>{actionData.time}</span>
          </div>
        </div>

        <button className="nba-btn" onClick={handleComplete}>
          Start Practice <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default NextBestAction;
