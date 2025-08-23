import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { activityAPI } from '../services/api';
import { Search, MapPin, Star, Clock, Calendar, Heart, Menu, X, Filter, Loader } from 'lucide-react';
import BookingModal from './BookingModal';
import '../css/Home.css';

const Home = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [featuredActivities, setFeaturedActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const categories = [
    { id: '', name: 'All Categories', icon: '🏛️' },
    { id: 'TOURS', name: 'Tours', icon: '🎯' },
    { id: 'ADVENTURE', name: 'Adventure', icon: '🏔️' },
    { id: 'FOOD', name: 'Food & Drink', icon: '🍽️' },
    { id: 'CRUISE', name: 'Cruises', icon: '⛵' },
    { id: 'CULTURAL', name: 'Cultural', icon: '🎭' },
  ];

  useEffect(() => {
    loadActivities();
    loadFeaturedActivities();
  }, []);

  useEffect(() => {
    searchActivities();
  }, [searchTerm, selectedLocation, selectedCategory, priceRange, currentPage]);

  const loadActivities = async () => {
    setLoading(true);
    try {
      const response = await activityAPI.getAll({
        page: 0,
        size: 20,
        sortBy: 'createdAt',
        sortDir: 'desc'
      });
      
      setActivities(response.data);
      setFilteredActivities(response.data);
  
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error loading activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadFeaturedActivities = async () => {
    try {
      const response = await activityAPI.getFeatured();
      setFeaturedActivities(response.data);
    } catch (error) {
      console.error('Error loading featured activities:', error);
    }
  };

  const searchActivities = async () => {
    setLoading(true);
    try {
      const params = {
        page: currentPage,
        size: 12,
        sortBy: 'createdAt',
        sortDir: 'desc'
      };

      if (searchTerm) params.keyword = searchTerm;
      if (selectedLocation) params.keyword = selectedLocation;
      if (selectedCategory) params.category = selectedCategory;
      if (priceRange[1] < 500) {
        params.minPrice = priceRange[0];
        params.maxPrice = priceRange[1];
      }

      const response = await activityAPI.search(params);
      
      setFilteredActivities(response.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error searching activities:', error);
      setFilteredActivities([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const handleBookNow = (activity) => {
    if (!isAuthenticated) {
      alert('Please login to book an activity');
      return;
    }
    setSelectedActivity(activity);
    setIsBookingModalOpen(true);
  };

  const handleBookingComplete = (booking) => {
    console.log('Booking completed:', booking);
  };
  console.log("filtered activities : ", filteredActivities);

  const ActivityCard = ({ activity }) => (
    <div className="activity-card">
      <div style={{ position: 'relative' }}>
        <img
          src={activity.image_url}
          alt={activity.title}
          className="activity-image"
        />
        {activity.originalPrice > activity.price && (
          <div className="discount-badge">
            Save ${(activity.originalPrice - activity.price).toFixed(2)}
          </div>
        )}
      </div>
      
      <div className="activity-content">
        <Link to={`/activity/${activity.id}`}>
          <h3 className="activity-title">{activity.title}</h3>
        </Link>
        
        <div className="activity-location">
          <MapPin style={{ width: '16px', height: '16px', marginRight: '4px' }} />
          <span>{activity.location}</span>
        </div>
        
        <div className="activity-rating">
          {activity.rating && (
            <>
              <Star style={{ width: '16px', height: '16px', color: '#facc15', marginRight: '4px' }} />
              <span>{activity.rating}</span>
              <span style={{ marginLeft: '4px', color: '#6b7280' }}>({activity.reviewCount} reviews)</span>
            </>
          )}
        </div>
        
        <div style={{ margin: '0.75rem 0' }}>
          {activity.highlights && activity.highlights.slice(0, 2).map((highlight, index) => (
            <span key={index} className="highlight-tag">{highlight}</span>
          ))}
          {activity.highlights && activity.highlights.length > 2 && (
            <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
              +{activity.highlights.length - 2} more
            </span>
          )}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            {activity.originalPrice && activity.originalPrice > activity.price && (
              <span style={{ textDecoration: 'line-through', color: '#9ca3af', marginRight: '8px' }}>
                ${activity.originalPrice}
              </span>
            )}
            <span className="activity-price">${activity.price}</span>
            <span style={{ fontSize: '0.875rem', color: '#6b7280', marginLeft: '4px' }}>per person</span>
          </div>
          <Link to={`/activity/${activity.id}`}>
            <button className="button-primary">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="hero-title">Discover Amazing Experiences</h2>
        <p className="hero-subtitle">
          Book unique tours, activities, and experiences around the world
        </p>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="What do you want to do?"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Where?"
            className="search-input"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          />
          <input
            type="date"
            className="search-input"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button 
            onClick={searchActivities}
            className="button-primary"
          >
            Search
          </button>
        </div>
      </section>

      {/* Featured Activities */}
      {featuredActivities.length > 0 && (
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
            Featured Experiences
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {featuredActivities?.slice(0, 4).map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </section>
      )}

      {/* Main Content */}
      <main id="activities" style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
          Browse by Category
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(0);
              }}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Filter + Results */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Filters Sidebar */}
          <aside className="filter-sidebar" style={{ flex: '0 0 250px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Price Range</h4>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) => {
                setPriceRange([priceRange[0], parseInt(e.target.value)]);
                setCurrentPage(0);
              }}
              style={{ width: '100%' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </aside>

          {/* Activities Grid */}
          <div style={{ flex: 1 }}>
            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
                <Loader style={{ width: '32px', height: '32px', animation: 'spin 1s linear infinite', color: '#2563eb' }} />
              </div>
            ) : (Array.isArray(filteredActivities) && filteredActivities !== null && filteredActivities !== undefined && filteredActivities.length > 0) ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  {filteredActivities?.map(activity => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                <Search style={{ width: '48px', height: '48px', margin: '0 auto' }} />
                <h3>No experiences found</h3>
                <p>Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      <BookingModal
        activity={selectedActivity}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onBookingComplete={handleBookingComplete}
      />
    </div>
  );
};

export default Home;
