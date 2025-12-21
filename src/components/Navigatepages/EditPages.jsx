import React, { useState } from 'react';
import '../Navigatepages/EditPage.css';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function EditPages() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: 'Ahmed',
    lastName: 'Khan',
    houseName: 'Baitul Izza',
    mobile: '9497556780',
    email: 'ahmed.khan@gmail.com',
    password: '1234',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', formData);
    alert('Profile Updated Successfully!');
    navigate('/profile');
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-card">

        {/* ✅ Back Button with Material UI Icon */}
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate('/profile')}
        >
          <ArrowBackIcon fontSize="small" />
        </button>

        <h2>Edit Profile</h2>
        <p className="subtitle">Updated your Mahal Details</p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label>Mobile Number</label>
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" value={formData.email} disabled />
          </div>

          <div className="field">
            <label>New Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="save-btn" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPages;
