import React, { useState, useEffect } from 'react';
import { User, MapPin, Edit3 } from 'lucide-react';
import '../css/Profile.css';
import axios from "axios";
import { userAPI } from '../services/api';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(null); 
  const [loading, setLoading] = useState(true);

  // Fetch user data from backend using token
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // const token = localStorage.getItem("token"); 
        // if (!token) {
        //   console.error("No token found in localStorage");
        //   return;
        // }
        //console.log("token : ", token);

        const response = await userAPI.getProfile();
        console.log("response : ", response);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      await userAPI.updateProfile(profile);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>User not found.</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-banner"></div>
        <div className="profile-content">
          <div className="profile-header">
            <div className="avatar">
              <User className="avatar-icon" />
            </div>
            <div>
              <h1 className="profile-name">{profile.name}</h1>
              <p className="profile-join-date">
                Member since {new Date(profile.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="profile-grid">
            <div className="profile-section">
              <h3 className="section-title">Personal Information</h3>
              {isEditing ? (
                <div className="form-group">
                  <input
                    className="form-input"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                  <input
                    className="form-input"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                  <textarea
                    className="form-textarea"
                    value={profile.bio || ""}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  />
                  <div className="button-group">
                    <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
                    <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="info-display">
                  <div className="info-item">
                    <User className="info-icon" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="info-item">
                    <MapPin className="info-icon" />
                    <span>{profile.phone || "Not provided"}</span>
                  </div>
                  <p className="profile-bio">{profile.bio || "No bio yet"}</p>
                  <button className="btn btn-primary edit-btn" onClick={() => setIsEditing(true)}>
                    <Edit3 className="edit-icon" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              )}
            </div>

            <div className="profile-section">
              <h3 className="section-title">Account Details</h3>
              <div className="stats-box">
                <div className="stats-row">
                  <span className="stats-label">Role</span>
                  <span className="stats-value">{profile.role}</span>
                </div>
                <div className="stats-row">
                  <span className="stats-label">Joined</span>
                  <span className="stats-value">
                    {new Date(profile.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
