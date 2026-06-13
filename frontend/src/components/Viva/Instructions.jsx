import React from 'react';
import { AlertTriangle, Shield, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import './Instructions.css';

const StepperHeader = ({ step }) => {
  return (
    <div className="stepper-header">
      <div className="stepper-steps">
        <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <span>Instructions</span>
        </div>
        <div className="step-divider" />
        <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <span>Checklist</span>
        </div>
        <div className="step-divider" />
        <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <span>Assessment</span>
        </div>
      </div>
      <div className="stepper-status">
        Step {step} of 3
      </div>
    </div>
  );
};

export { StepperHeader };

const Instructions = ({ onProceed }) => {
  return (
    <div className="animate-fade-in" style={{background: 'var(--bg-secondary)', minHeight: '100vh'}}>
      <StepperHeader step={1} />
      
      <div className="instructions-container">
        <h2 className="instructions-title">Assessment Instructions</h2>
        
        <div className="notice-box">
          <div className="notice-title">
            <AlertTriangle size={20} /> Important Notice
          </div>
          <p className="notice-text">
            Your test hasn't started yet. So please take your time to read these instructions carefully. Failure to follow them may result in your assessment being flagged or disqualified.
          </p>
        </div>

        <div className="rules-box">
          <div className="rules-header">
            <Shield size={20} /> Must-Follow Rules — Any Violation Will Be Flagged
          </div>
          <ul className="rules-list">
            <li className="rule-item"><div className="rule-dot">●</div> Face match is required to begin the test.</li>
            <li className="rule-item"><div className="rule-dot">●</div> Sit alone in a quiet, well-lit space.</li>
            <li className="rule-item"><div className="rule-dot">●</div> Keep your face visible throughout the test.</li>
            <li className="rule-item"><div className="rule-dot">●</div> No other faces should appear on camera.</li>
            <li className="rule-item"><div className="rule-dot">●</div> Don't switch tabs during the test.</li>
            <li className="rule-item"><div className="rule-dot">●</div> Don't click outside the test window.</li>
            <li className="rule-item"><div className="rule-dot">●</div> Stay in full screen mode at all times.</li>
          </ul>
        </div>

        <div className="guidelines-grid">
          <div className="guideline-col">
            <h3 className="guideline-title">Before starting the assessment</h3>
            
            <div className="guideline-section do">
              <div className="guideline-section-title do"><CheckCircle2 size={18} /> Do</div>
              <ul className="guideline-list">
                <li>Test your microphone by recording a short audio clip to ensure clear audio quality.</li>
                <li>Use earphones or headphones to minimize background noise and improve voice clarity.</li>
                <li>Choose a quiet, well-lit space where you won't be disturbed during the assessment.</li>
                <li>Capture an image of yourself to verify your identity.</li>
                <li>Ensure your face is clearly visible by sitting in a properly lit area (avoid backlighting).</li>
              </ul>
            </div>

            <div className="guideline-section dont">
              <div className="guideline-section-title dont"><XCircle size={18} /> Don't</div>
              <ul className="guideline-list">
                <li>Don't start the test in a noisy environment (e.g., cafes, crowded rooms).</li>
                <li>Avoid dim or harsh lighting—it may affect facial recognition or proctoring.</li>
              </ul>
            </div>
          </div>

          <div className="guideline-col during">
            <h3 className="guideline-title">During the assessment</h3>
            
            <div className="guideline-section do">
              <div className="guideline-section-title do"><CheckCircle2 size={18} /> Do</div>
              <ul className="guideline-list">
                <li>Stay within the camera frame at all times to avoid disqualification.</li>
                <li>Listen carefully—questions will be read aloud, even if displayed on screen.</li>
                <li>Manage your time wisely—each question has a strict time limit.</li>
                <li>Maintain academic integrity—the test is proctored; any cheating will be flagged.</li>
                <li>Ensure you have a stable and uninterrupted internet connection during the assessment.</li>
              </ul>
            </div>

            <div className="guideline-section dont">
              <div className="guideline-section-title dont"><XCircle size={18} /> Don't</div>
              <ul className="guideline-list">
                <li>Don't leave the camera's view during the assessment.</li>
                <li>Avoid external help—using notes, phones, or assistance from others is prohibited.</li>
                <li>Don't rush carelessly—balance speed with accuracy when answering.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="proceed-action">
          <button className="btn-proceed" onClick={onProceed}>
            Proceed to Checklist <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
