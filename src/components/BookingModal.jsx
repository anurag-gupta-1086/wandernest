import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { bookingAPI } from '../services/api';
import { X, Calendar, Users, CreditCard, Loader } from 'lucide-react';

const BookingModal = ({ activity, isOpen, onClose, onBookingComplete }) => {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [bookingData, setBookingData] = useState({
    bookingDate: '',
    participants: 1,
    specialRequests: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      setError('Please login to make a booking');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await bookingAPI.create({
        activityId: activity.id,
        ...bookingData
      });
      
      setSuccess('Booking created successfully!');
      setTimeout(() => {
        onBookingComplete(response.data);
        onClose();
      }, 1500);
    } catch (error) {
      setError(error.response?.data?.message || 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: name === 'participants' ? parseInt(value) || 1 : value
    }));
  };

  const totalAmount = activity?.price * bookingData.participants || 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Book Your Experience</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {activity && (
            <div className="mb-4">
              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-gray-900">{activity.title}</h3>
              <p className="text-sm text-gray-600">{activity.location}</p>
              <p className="text-lg font-bold text-blue-600 mt-2">
                ${activity.price} per person
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                {success}
              </div>
            )}

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                Select Date
              </label>
              <input
                type="date"
                name="bookingDate"
                required
                min={new Date().toISOString().split('T')[0]}
                value={bookingData.bookingDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 mr-2" />
                Number of Participants
              </label>
              <input
                type="number"
                name="participants"
                required
                min="1"
                max={activity?.maxParticipants || 50}
                value={bookingData.participants}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {activity?.maxParticipants && (
                <p className="text-xs text-gray-500 mt-1">
                  Maximum {activity.maxParticipants} participants
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                name="specialRequests"
                rows="3"
                value={bookingData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requirements or requests..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total Amount:</span>
                <span className="text-xl font-bold text-blue-600">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Confirm Booking
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;