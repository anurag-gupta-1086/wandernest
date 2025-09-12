import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Star, X } from 'lucide-react';
import '../css/MyBookings.css';
import { bookingAPI } from '../services/api';

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [bookings, setBookings] = useState({ upcoming: [], past: [] });
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await bookingAPI.getUserBookings();
        const bookingData = response.data;

        const today = new Date().toISOString().split("T")[0];
        const upcoming = bookingData.filter(b => new Date(b.selected_date).toISOString().split("T")[0] >= today && b.status == 'confirmed');
        const past = bookingData.filter(b => new Date(b.selected_date).toISOString().split("T")[0] < today || b.status == 'cancelled');

        setBookings({ upcoming, past });
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const getStatusClass = (status) => {
    switch(status) {
      case 'confirmed': return 'status confirmed';
      case 'pending': return 'status pending';
      case 'completed': return 'status completed';
      case 'cancelled': return 'status cancelled';
      default: return 'status';
    }
  };

  const handleViewDetails = async (bookingId) => {
    try {
      setDetailsLoading(true);
      const response = await bookingAPI.getById(bookingId); // call backend API
      setSelectedBooking(response.data);
    } catch (error) {
      console.error("Error fetching booking details:", error);
    } finally {
      setDetailsLoading(false);
    }
  };

  const handleCloseDetails = () => {
    setSelectedBooking(null);
  };

  const handleCancelBooking = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    try {
      setCancelLoading(bookingId);
      const resp = await bookingAPI.cancel(bookingId); // call backend API

      // update local state after cancellation
      setBookings(prev => {
        const updatedUpcoming = prev.upcoming.filter(b => b.id !== bookingId);
        return { ...prev, upcoming: updatedUpcoming };
      });

      // If details modal is open for the cancelled booking, close it
      if (selectedBooking?.id === bookingId) {
        setSelectedBooking(null);
      }

    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("Failed to cancel booking. Please try again.");
    } finally {
      setCancelLoading(null);
    }
  };

  if (loading) {
    return <div className="bookings-container"><h2>Loading bookings...</h2></div>;
  }

  return (
    <div className="bookings-container">
      <h1 className="page-title">My Bookings</h1>
      
      <div className="bookings-card">
        <div className="tab-header">
          <nav className="tabs">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            >
              Upcoming Bookings
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            >
              Past Bookings
            </button>
          </nav>
        </div>
        
        <div className="bookings-list">
          {bookings[activeTab].length === 0 ? (
            <p>No {activeTab} bookings found.</p>
          ) : (
            bookings[activeTab].map((booking) => (
              <div key={booking.id} className="booking-card">
                <div className="booking-main">
                  <div className="booking-info">
                    <h3 className="booking-title">Activity #{booking.activity_id}</h3>
                    <div className="booking-details">
                      <div className="detail-item"><Calendar size={16} /> {booking.selected_date}</div>
                      <div className="detail-item"><Clock size={16} /></div>
                      <div className="detail-item"><Users size={16} /> {booking.participants} people</div>
                    </div>
                  </div>
                  <div className="booking-actions">
                    <span className={getStatusClass(booking.status)}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                    <div className="booking-price">£{booking.total_price}</div>
                    {activeTab === 'upcoming' && (
                      <div className="action-buttons">
                        <button 
                          className="btn btn-view" 
                          onClick={() => handleViewDetails(booking.id)}
                        >
                          {detailsLoading ? "Loading..." : "View Details"}
                        </button>
                        <button 
                          className="btn btn-cancel"
                          onClick={() => handleCancelBooking(booking.id)}
                          disabled={cancelLoading === booking.id}
                        >
                          {cancelLoading === booking.id ? "Cancelling..." : "Cancel"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Details Modal */}
      {selectedBooking && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={handleCloseDetails}>
              <X size={20} />
            </button>
            <h2>Booking Details</h2>
            <p><strong>Activity ID:</strong> {selectedBooking.activity_id}</p>
            <p><strong>Activity Title:</strong> {selectedBooking.activity_title}</p>
            <p><strong>Date:</strong> {selectedBooking.selected_date}</p>
            <p><strong>Participants:</strong> {selectedBooking.participants}</p>
            <p><strong>Total Price:</strong> £{selectedBooking.total_price}</p>
            <p><strong>Status:</strong> {selectedBooking.status}</p>
            <p><strong>Created At:</strong> {selectedBooking.created_at}</p>
            <p><strong>Updated At:</strong> {selectedBooking.updated_at}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
