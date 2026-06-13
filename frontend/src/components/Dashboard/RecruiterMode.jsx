import React, { useState } from 'react';
import { Mic, Radio, Play, CheckCircle2 } from 'lucide-react';
import './RecruiterMode.css';

const RecruiterMode = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="recruiter-mode-container animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="recruiter-header">
        <div className="recruiter-title-wrap">
          <Mic size={28} color="var(--accent-primary)" />
          <h2 className="recruiter-title">Recruiter Mode</h2>
          <div className="live-badge">
            <Radio size={12} /> Live AI
          </div>
        </div>

        {!isCompleted && (
          <button className="start-btn" onClick={() => setIsCompleted(true)}>
            <Play size={18} /> Start Interview
          </button>
        )}
      </div>

      {isCompleted && (
        <div className="results-dashboard">
          <h3 className="results-title">Interview Results</h3>
          
          <div className="scores-grid">
            <div className="score-card">
              <div className="score-label">Technical</div>
              <div className="score-value">82%</div>
            </div>
            <div className="score-card">
              <div className="score-label">Communication</div>
              <div className="score-value" style={{ color: 'var(--warning)' }}>70%</div>
            </div>
            <div className="score-card">
              <div className="score-label">Confidence</div>
              <div className="score-value">76%</div>
            </div>
          </div>

          <div className="recommendation-box">
            <CheckCircle2 size={24} className="rec-icon" />
            <div className="rec-text">
              <strong>Recommendation: Practice System Design</strong>
              Your technical fundamentals are solid, but you struggled to articulate the high-level architecture. Try using the STAR method for better communication structure.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruiterMode;
