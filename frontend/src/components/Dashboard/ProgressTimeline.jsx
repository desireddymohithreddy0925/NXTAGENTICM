import React from 'react';
import { Check } from 'lucide-react';
import './ProgressTimeline.css';

const steps = [
  'Assessment',
  'Skill Analysis',
  'Learning',
  'Project',
  'Resume',
  'Interview',
  'Placement'
];

const ProgressTimeline = () => {
  const currentStep = 2; // Learning is current

  return (
    <div className="timeline-container animate-fade-in">
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        <div className="timeline-progress" style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}></div>
        
        {steps.map((step, idx) => {
          let statusClass = 'future';
          if (idx < currentStep) statusClass = 'completed';
          if (idx === currentStep) statusClass = 'current';

          return (
            <div key={idx} className={`timeline-step ${statusClass}`}>
              <div className="step-marker">
                {statusClass === 'completed' ? <Check size={12} /> : null}
                {statusClass === 'current' ? <div style={{width: 8, height: 8, background: 'white', borderRadius: '50%'}} /> : null}
              </div>
              <div className="step-label">{step}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTimeline;
