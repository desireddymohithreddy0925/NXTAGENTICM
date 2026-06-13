import React, { useState } from 'react';
import { User, Edit2, Mail, Phone, Calendar, MapPin, Building, GraduationCap, Award, BookOpen } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Mohith Reddy',
    email: 'mohith.reddy@example.com',
    phone: '+91 9876543210',
    gender: 'Male',
    dob: '15-08-2004'
  });

  const [instituteInfo, setInstituteInfo] = useState({
    name: 'SRM UNIVERSITY AP',
    country: 'India',
    state: 'Andhra Pradesh'
  });

  const [academicInfo, setAcademicInfo] = useState({
    rollNumber: 'AP25110140019',
    degree: 'B TECH',
    department: 'CSE',
    specialization: 'PEWAI',
    academicYear: '1st Year',
    currentSemester: '1st Semester',
    joiningYear: '2025'
  });

  const [educationDetails, setEducationDetails] = useState({
    tenthBoard: 'SSC',
    tenthPercentage: '92.83%',
    twelfthBoard: 'BIEAP',
    twelfthPercentage: '93.8%'
  });

  const handleEdit = (section) => {
    alert(`Edit functionality for ${section} coming soon!`);
  };

  return (
    <div className="profile-container animate-fade-in">
      <div className="profile-header-breadcrumb">
        <User size={18} />
        <span>My Profile</span>
      </div>

      {/* Personal Information */}
      <div className="profile-card">
        <div className="profile-card-header">
          <h3>Personal Information</h3>
          <button className="btn-edit" onClick={() => handleEdit('Personal Information')}>
            <Edit2 size={16} /> Edit
          </button>
        </div>
        <div className="profile-grid">
          <div className="info-item">
            <div className="info-label"><User size={14} /> Name</div>
            <div className="info-value">{personalInfo.name}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Mail size={14} /> Email</div>
            <div className="info-value">{personalInfo.email}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Phone size={14} /> Phone Number</div>
            <div className="info-value">{personalInfo.phone}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><User size={14} /> Gender</div>
            <div className="info-value">{personalInfo.gender}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Calendar size={14} /> Date of Birth</div>
            <div className="info-value">{personalInfo.dob}</div>
          </div>
        </div>
      </div>

      {/* Institute Information */}
      <div className="profile-card">
        <div className="profile-card-header">
          <h3>Institute Information</h3>
          <button className="btn-edit" onClick={() => handleEdit('Institute Information')}>
            <Edit2 size={16} /> Edit
          </button>
        </div>
        <div className="profile-grid">
          <div className="info-item">
            <div className="info-label"><Building size={14} /> Institute Name</div>
            <div className="info-value">{instituteInfo.name}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><MapPin size={14} /> Country</div>
            <div className="info-value">{instituteInfo.country}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><MapPin size={14} /> State</div>
            <div className="info-value">{instituteInfo.state}</div>
          </div>
        </div>
      </div>

      {/* Academic Information */}
      <div className="profile-card">
        <div className="profile-card-header">
          <h3>Academic Information</h3>
          <button className="btn-edit" onClick={() => handleEdit('Academic Information')}>
            <Edit2 size={16} /> Edit
          </button>
        </div>
        <div className="profile-grid">
          <div className="info-item">
            <div className="info-label"><BookOpen size={14} /> Roll Number</div>
            <div className="info-value">{academicInfo.rollNumber}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><GraduationCap size={14} /> Degree</div>
            <div className="info-value">{academicInfo.degree}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Building size={14} /> Department</div>
            <div className="info-value">{academicInfo.department}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Award size={14} /> Specialization</div>
            <div className="info-value">{academicInfo.specialization}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Calendar size={14} /> Academic Year</div>
            <div className="info-value">{academicInfo.academicYear}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Calendar size={14} /> Current Semester</div>
            <div className="info-value">{academicInfo.currentSemester}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Calendar size={14} /> Joining Year</div>
            <div className="info-value">{academicInfo.joiningYear}</div>
          </div>
        </div>
      </div>

      {/* Education Details */}
      <div className="profile-card">
        <div className="profile-card-header">
          <h3>Education Details</h3>
          <button className="btn-edit" onClick={() => handleEdit('Education Details')}>
            <Edit2 size={16} /> Edit
          </button>
        </div>
        <div className="profile-grid">
          <div className="info-item">
            <div className="info-label"><Building size={14} /> 10th Board</div>
            <div className="info-value">{educationDetails.tenthBoard}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Award size={14} /> 10th Percentage</div>
            <div className="info-value">{educationDetails.tenthPercentage}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Building size={14} /> 12th Board</div>
            <div className="info-value">{educationDetails.twelfthBoard}</div>
          </div>
          <div className="info-item">
            <div className="info-label"><Award size={14} /> 12th Percentage</div>
            <div className="info-value">{educationDetails.twelfthPercentage}</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
