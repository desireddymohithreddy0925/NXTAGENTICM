import React, { useState, useEffect } from 'react';
import { Building, AlertCircle, X } from 'lucide-react';
import { DashboardAPI } from '../../api/client';
import './DreamCompany.css';

const DreamCompany = () => {
  const [activeCompany, setActiveCompany] = useState('Google');
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await DashboardAPI.getDreamCompanies();
        setCompanyData(response.companies);
      } catch (err) {
        console.error('Failed to perfectly load dream companies', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!companyData) return <div>No data available</div>;

  const data = companyData[activeCompany];

  return (
    <div className="company-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="company-header">
        <Building size={24} color="var(--accent-primary)" />
        <h3 className="company-title">Company Readiness</h3>
      </div>

      <div className="company-tabs">
        {Object.keys(companyData).map((company) => (
          <div 
            key={company}
            className={`company-tab ${activeCompany === company ? 'active' : ''}`}
            onClick={() => setActiveCompany(company)}
          >
            {company}
          </div>
        ))}
      </div>

      <div className="company-content">
        <div className="readiness-section">
          <div className="readiness-header">
            <span className="readiness-label">{activeCompany} Readiness</span>
            <span className="readiness-value">{data.readiness}%</span>
          </div>
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${data.readiness}%` }}
            />
          </div>
        </div>

        <div className="missing-skills-section">
          <div className="missing-skills-title">
            <AlertCircle size={16} />
            Missing Skills for {activeCompany}
          </div>
          <div className="missing-list">
            {data.missing.map((skill, idx) => (
              <div key={idx} className="missing-item">
                <X size={14} color="var(--error)" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamCompany;
