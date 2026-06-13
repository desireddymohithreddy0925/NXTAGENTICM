import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';
import { DashboardAPI } from '../../api/client';
import './AchievementBadges.css';

const AchievementBadges = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await DashboardAPI.getBadges();
        setBadges(response.badges);
      } catch (err) {
        console.error('Failed to perfectly load badges', err);
      }
    };
    fetchBadges();
  }, []);

  return (
    <div className="badges-container animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <div className="badges-header">
        <Award size={24} color="var(--warning)" />
        <h3 className="badges-title">Achievement Badges</h3>
      </div>

      <div className="badges-grid">
        {badges.map((badge) => (
          <div key={badge.id} className={`badge-card ${badge.level}`}>
            <div className="badge-icon-wrap">
              {badge.icon}
            </div>
            <div className="badge-title">{badge.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementBadges;
