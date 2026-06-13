import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, ChevronRight, CheckCircle2 } from 'lucide-react';
import './LiveInterview.css';

// Questions are now passed as props from the backend session

const cheatWarnings = [
  "Face not visible in frame",
  "Multiple persons detected",
  "Background noise/talking detected",
  "Head turned away from screen"
];

const LiveInterview = ({ stream, onComplete, questions = [] }) => {
  const videoRef = useRef(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [phase, setPhase] = useState('reading'); // 'reading' | 'speaking'
  const [timeLeft, setTimeLeft] = useState(5);
  const [warning, setWarning] = useState(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    // Timer Logic
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (phase === 'reading') {
            setPhase('speaking');
            return 60; // 60 seconds to speak
          } else {
            handleNextQuestion();
            return 5;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, currentQIndex]);

  useEffect(() => {
    // Simulate random cheat detection warning during speaking phase
    if (phase === 'speaking' && Math.random() < 0.05 && timeLeft > 10) {
      const randomWarning = cheatWarnings[Math.floor(Math.random() * cheatWarnings.length)];
      setWarning(randomWarning);
      setTimeout(() => setWarning(null), 3000);
    }
  }, [timeLeft, phase]);

  const handleNextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setPhase('reading');
      setTimeLeft(5);
    } else {
      onComplete();
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="live-interview-container animate-fade-in">
      <div className="interview-main">
        <div className="video-area">
          <video ref={videoRef} autoPlay playsInline muted />
          
          <div className="overlay-ui">
            <div className="top-overlay">
              <div className="recording-indicator">
                {phase === 'speaking' ? (
                  <><div className="recording-dot"></div> Recording & Analyzing</>
                ) : (
                  <span style={{ color: 'var(--text-secondary)' }}>Reading Time</span>
                )}
              </div>
              <div className="timer-display" style={{ color: phase === 'reading' ? 'var(--warning)' : 'white' }}>
                {formatTime(timeLeft)}
              </div>
            </div>

            {warning && (
              <div className="warning-toast">
                <AlertTriangle size={24} />
                <span>Warning: {warning}</span>
              </div>
            )}

            <div className="bottom-overlay">
              <div className="question-counter">Question {currentQIndex + 1} of 10</div>
              <div className="question-text">{questions[currentQIndex]}</div>
              <div className="controls-area">
                <button 
                  className="btn btn-primary" 
                  onClick={handleNextQuestion}
                  disabled={phase === 'reading'}
                >
                  {currentQIndex === 9 ? 'Finish Assessment' : 'Submit & Next'} <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="interview-sidebar">
        <h3 className="sidebar-title">Assessment Progress</h3>
        <div className="q-list">
          {questions.map((q, idx) => {
            let statusClass = 'pending';
            if (idx < currentQIndex) statusClass = 'completed';
            if (idx === currentQIndex) statusClass = 'active';

            return (
              <div key={idx} className={`q-item ${statusClass}`}>
                <span>Question {idx + 1}</span>
                {statusClass === 'completed' && <CheckCircle2 size={16} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LiveInterview;
