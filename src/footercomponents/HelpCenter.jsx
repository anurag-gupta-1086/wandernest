import React, { useState } from 'react';
import { Search, BookOpen, CreditCard, Users, MapPin, Shield, Phone, ChevronRight, Star, Clock } from 'lucide-react';
import '../css/Home.css';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: <BookOpen style={{ width: '20px', height: '20px' }} />, count: 45 },
    { id: 'booking', name: 'Booking & Reservations', icon: <CreditCard style={{ width: '20px', height: '20px' }} />, count: 12 },
    { id: 'account', name: 'Account Management', icon: <Users style={{ width: '20px', height: '20px' }} />, count: 8 },
    { id: 'experiences', name: 'Experiences & Travel', icon: <MapPin style={{ width: '20px', height: '20px' }} />, count: 15 },
    { id: 'safety', name: 'Safety & Security', icon: <Shield style={{ width: '20px', height: '20px' }} />, count: 6 },
    { id: 'support', name: 'Customer Support', icon: <Phone style={{ width: '20px', height: '20px' }} />, count: 4 }
  ];

  const articles = [
    {
      id: 1,
      title: 'How to book an experience',
      category: 'booking',
      views: '12.5K',
      rating: 4.8,
      lastUpdated: '2024-01-15',
      content: 'Step-by-step guide to booking your perfect experience through WanderNest...',
      tags: ['booking', 'payment', 'confirmation']
    },
    {
      id: 2,
      title: 'Cancellation and refund policy',
      category: 'booking',
      views: '8.2K',
      rating: 4.6,
      lastUpdated: '2024-01-10',
      content: 'Understanding our cancellation policies and how to request refunds...',
      tags: ['cancellation', 'refund', 'policy']
    },
    {
      id: 3,
      title: 'Creating and managing your account',
      category: 'account',
      views: '5.1K',
      rating: 4.7,
      lastUpdated: '2024-01-12',
      content: 'Learn how to set up your WanderNest account and manage your profile...',
      tags: ['account', 'profile', 'settings']
    },
    {
      id: 4,
      title: 'What to expect on your experience',
      category: 'experiences',
      views: '15.3K',
      rating: 4.9,
      lastUpdated: '2024-01-08',
      content: 'Preparing for your adventure and what to bring along...',
      tags: ['preparation', 'what-to-bring', 'expectations']
    },
    {
      id: 5,
      title: 'Payment methods and security',
      category: 'booking',
      views: '6.8K',
      rating: 4.5,
      lastUpdated: '2024-01-14',
      content: 'Accepted payment methods and how we protect your financial information...',
      tags: ['payment', 'security', 'credit-card']
    },
    {
      id: 6,
      title: 'Safety guidelines and emergency procedures',
      category: 'safety',
      views: '9.1K',
      rating: 4.8,
      lastUpdated: '2024-01-11',
      content: 'Important safety information and what to do in case of emergencies...',
      tags: ['safety', 'emergency', 'guidelines']
    },
    {
      id: 7,
      title: 'Changing your booking details',
      category: 'booking',
      views: '7.4K',
      rating: 4.4,
      lastUpdated: '2024-01-13',
      content: 'How to modify dates, times, and other booking information...',
      tags: ['modify', 'change', 'booking']
    },
    {
      id: 8,
      title: 'Group bookings and discounts',
      category: 'booking',
      views: '4.2K',
      rating: 4.7,
      lastUpdated: '2024-01-09',
      content: 'Special rates and procedures for booking experiences for groups...',
      tags: ['group', 'discount', 'bulk-booking']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularArticles = articles.slice(0, 4);

  const quickActions = [
    {
      title: 'Track Your Booking',
      description: 'Check the status of your current reservations',
      icon: <MapPin style={{ width: '24px', height: '24px', color: '#2563eb' }} />,
      action: () => alert('Booking tracker would open here')
    },
    {
      title: 'Contact Support',
      description: 'Get help from our customer service team',
      icon: <Phone style={{ width: '24px', height: '24px', color: '#10b981' }} />,
      action: () => alert('Support contact form would open here')
    },
    {
      title: 'Report an Issue',
      description: 'Let us know about any problems you experienced',
      icon: <Shield style={{ width: '24px', height: '24px', color: '#f59e0b' }} />,
      action: () => alert('Issue reporting form would open here')
    },
    {
      title: 'Leave Feedback',
      description: 'Share your thoughts about your experience',
      icon: <Star style={{ width: '24px', height: '24px', color: '#ef4444' }} />,
      action: () => alert('Feedback form would open here')
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '50vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>Help Center</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            <Search style={{ 
              position: 'absolute', 
              left: '1rem', 
              top: '50%', 
              transform: 'translateY(-50%)',
              width: '20px', 
              height: '20px', 
              color: '#6b7280' 
            }} />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                fontSize: '1rem',
                borderRadius: '12px',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem', transform: 'translateY(-50px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {quickActions.map((action, index) => (
            <div 
              key={index} 
              onClick={action.action}
              style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '12px', 
                boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)', 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                ':hover': { transform: 'translateY(-2px)' }
              }}
            >
              <div style={{ marginBottom: '1rem' }}>{action.icon}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                {action.title}
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{action.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Categories Sidebar */}
          <aside style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', height: 'fit-content', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Categories</h3>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: selectedCategory === category.id ? '#eff6ff' : 'transparent',
                    color: selectedCategory === category.id ? '#2563eb' : '#4b5563',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: selectedCategory === category.id ? '600' : '400'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    backgroundColor: selectedCategory === category.id ? '#dbeafe' : '#f3f4f6',
                    color: selectedCategory === category.id ? '#1d4ed8' : '#6b7280',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px'
                  }}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* Articles */}
          <main>
            {/* Popular Articles (when no search/filter) */}
            {selectedCategory === 'all' && searchTerm === '' && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1f2937' }}>
                  Popular Articles
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  {popularArticles.map(article => (
                    <div key={article.id} style={{ 
                      backgroundColor: 'white', 
                      padding: '1.5rem', 
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                      cursor: 'pointer'
                    }}>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                        {article.title}
                      </h3>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                        {article.content}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#9ca3af' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Star style={{ width: '12px', height: '12px', color: '#facc15' }} />
                          <span>{article.rating}</span>
                        </div>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Articles */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1f2937' }}>
                {selectedCategory === 'all' && searchTerm === '' ? 'All Articles' : 'Search Results'}
                <span style={{ fontSize: '1rem', fontWeight: '400', color: '#6b7280', marginLeft: '0.5rem' }}>
                  ({filteredArticles.length} articles)
                </span>
              </h2>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {filteredArticles.map(article => (
                  <div key={article.id} style={{ 
                    backgroundColor: 'white', 
                    padding: '1.5rem', 
                    borderRadius: '12px',
                    boxShadow: '0 2px 4px -1px rgb(0 0 0 / 0.1)',
                    cursor: 'pointer',
                    border: '1px solid #e5e7eb',
                    transition: 'box-shadow 0.2s ease'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                          {article.title}
                        </h3>
                        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                          {article.content}
                        </p>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                          {article.tags.map((tag, index) => (
                            <span key={index} style={{ 
                              backgroundColor: '#f3f4f6', 
                              color: '#4b5563', 
                              padding: '0.25rem 0.5rem', 
                              borderRadius: '12px', 
                              fontSize: '0.75rem' 
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Star style={{ width: '12px', height: '12px', color: '#facc15' }} />
                            <span>{article.rating}</span>
                          </div>
                          <span>{article.views} views</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Clock style={{ width: '12px', height: '12px' }} />
                            <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ChevronRight style={{ width: '20px', height: '20px', color: '#9ca3af', marginLeft: '1rem' }} />
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredArticles.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                  <Search style={{ width: '48px', height: '48px', margin: '0 auto 1rem', opacity: 0.5 }} />
                  <h3>No articles found</h3>
                  <p>Try adjusting your search terms or browse by category</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </section>

      {/* Contact Support */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937' }}>
            Still Need Help?
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem' }}>
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => alert('Live chat would open here')}
              className="button-primary"
              style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Phone style={{ width: '18px', height: '18px' }} />
              Start Live Chat
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              style={{ 
                padding: '1rem 1.5rem', 
                border: '1px solid #d1d5db', 
                backgroundColor: 'white', 
                color: '#374151',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;