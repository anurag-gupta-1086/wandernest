import React, { useState } from 'react';
import { User, Calendar, Settings, Star, Edit3, Trash2, Eye, Plus, Users } from 'lucide-react';
import '../css/AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('activities');

  const stats = {
    totalUsers: 1247,
    totalActivities: 89,
    totalBookings: 3456,
    revenue: 87420
  };

  const activities = [
    { id: 1, title: 'Mountain Hiking Adventure', category: 'Outdoor', status: 'active', bookings: 145, rating: 4.8, price: 45 },
    { id: 2, title: 'Rock Climbing Experience', category: 'Adventure', status: 'active', bookings: 98, rating: 4.6, price: 35 },
    { id: 3, title: 'Cooking Masterclass', category: 'Indoor', status: 'inactive', bookings: 67, rating: 4.9, price: 75 }
  ];

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <p className="stat-label">Total Users</p>
            <p className="stat-value">{stats.totalUsers}</p>
          </div>
          <Users className="stat-icon blue" />
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <p className="stat-label">Activities</p>
            <p className="stat-value">{stats.totalActivities}</p>
          </div>
          <Calendar className="stat-icon green" />
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <p className="stat-label">Total Bookings</p>
            <p className="stat-value">{stats.totalBookings}</p>
          </div>
          <Star className="stat-icon yellow" />
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <p className="stat-label">Revenue</p>
            <p className="stat-value">£{stats.revenue.toLocaleString()}</p>
          </div>
          <Settings className="stat-icon purple" />
        </div>
      </div>

      {/* Main Content */}
      <div className="content-card">
        <div className="tab-nav">
          <button className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => setActiveTab('activities')}>
            Manage Activities
          </button>
          <button className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`} onClick={() => setActiveTab('bookings')}>
            All Bookings
          </button>
          <button className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>
            User Management
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'activities' && (
            <div>
              <div className="table-header">
                <h3 className="table-title">Activities Management</h3>
                <button className="add-btn">
                  <Plus className="add-icon" />
                  <span>Add Activity</span>
                </button>
              </div>

              <div className="table-wrapper">
                <table className="activities-table">
                  <thead>
                    <tr>
                      <th>Activity</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Bookings</th>
                      <th>Rating</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((activity) => (
                      <tr key={activity.id}>
                        <td>{activity.title}</td>
                        <td>{activity.category}</td>
                        <td>
                          <span className={`status-badge ${activity.status}`}>
                            {activity.status}
                          </span>
                        </td>
                        <td>{activity.bookings}</td>
                        <td className="rating-cell">
                          <Star className="rating-icon" />
                          {activity.rating}
                        </td>
                        <td>£{activity.price}</td>
                        <td className="action-buttons">
                          <button className="icon-btn blue"><Eye size={16} /></button>
                          <button className="icon-btn green"><Edit3 size={16} /></button>
                          <button className="icon-btn red"><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="empty-state">
              <Calendar size={48} className="empty-icon" />
              <h3>Bookings Management</h3>
              <p>View and manage all customer bookings here.</p>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="empty-state">
              <Users size={48} className="empty-icon" />
              <h3>User Management</h3>
              <p>Manage user accounts and permissions.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
