import React, { useState } from 'react';
import { Bot, TrendingUp } from 'lucide-react';
import './AssistantBubble.css';

const AssistantBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="assistant-container">
      {isOpen && (
        <div className="assistant-message">
          <div className="assistant-greeting">Hi Mohith! 👋</div>
          <div className="assistant-content">
            Today's recommendation:<br/>
            <strong>Practice Graph Algorithms.</strong>
          </div>
          <div className="assistant-impact">
            <TrendingUp size={14} /> Estimated improvement: +5%
          </div>
        </div>
      )}

      <button className="assistant-bubble" onClick={() => setIsOpen(!isOpen)}>
        <Bot size={28} className="assistant-bubble-icon" />
        <span className="help-text">Need Help?</span>
      </button>
    </div>
  );
};

export default AssistantBubble;
