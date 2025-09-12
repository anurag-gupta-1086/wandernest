import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import '../css/ActivityDetail.css';
import axios from 'axios';
import { activityAPI, bookingAPI } from '../services/api';
import { useParams } from "react-router-dom";

const ActivityDetail = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState(null);
  const { id } = useParams();
  const activityId = id;

  // Generate current date + next 5 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 6; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const formatted = date.toISOString().split("T")[0]; // YYYY-MM-DD
      dates.push(formatted);
    }
    return dates;
  };

  const availableDates = generateDates();

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await activityAPI.getById(id);
        setActivity(res.data);
      } catch (err) {
        console.error('Error fetching activity:', err);
      }
    };
    fetchActivity();
  }, [activityId]);

  const handleBooking = async () => {
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }

    try {
      const bookingData = {
        activity_id: activityId,
        selected_date: selectedDate,
        participants: participants
      };

      const response = await bookingAPI.create(bookingData);

      alert("Booking successful!");
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Booking failed. Please try again.");
    }
  };

  if (!activity) return <p>Loading activity...</p>;

  return (
    <div className="activity-detail-container">
      <div className="activity-top">
        {/* Images */}
        <div className="image-gallery">
          <img
            src={activity.image_url}
            alt={activity.title}
            className="main-image"
          />
          <p style={{ fontSize: '0.7rem', color: '#6b7280', marginTop: '4px' }}>
            Photo from{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              Unsplash
            </a>
          </p>
        </div>

        {/* Info */}
        <div className="activity-info">
          <h1 className="activity-title">{activity.title}</h1>

          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={
                  i < Math.floor(activity.rating)
                    ? 'star-icon filled'
                    : 'star-icon'
                }
              />
            ))}
            <span className="review-count">
              ({activity.review_count} reviews)
            </span>
          </div>

          <div className="location">
            <MapPin className="icon" />
            <span>{activity.location}</span>
          </div>

          <div className="price-card">
            <div className="price">
              £{activity.price}{' '}
              <span className="price-sub">per person</span>
            </div>

            <div className="details-grid">
              <div>
                <div className="detail">
                  <Clock className="icon" />
                  <span>{activity.duration}</span>
                </div>
                <div className="detail">
                  <Users className="icon" />
                  <span>Max {activity.max_participants} people</span>
                </div>
              </div>
            </div>

            <div className="form-section">
              <label>Select Date</label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="">Choose a date</option>
                {availableDates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>

              <label>Participants</label>
              <select
                value={participants}
                onChange={(e) => setParticipants(Number(e.target.value))}
              >
                {[...Array(activity.max_participants)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} {i === 0 ? 'person' : 'people'}
                  </option>
                ))}
              </select>

              <button className="book-btn" onClick={handleBooking}>
                Book Now - £{activity.price * participants}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Details */}
      <div className="description-card">
        <h2>About This Activity</h2>
        <p>{activity.description}</p>
      </div>
    </div>
  );
};

export default ActivityDetail;
