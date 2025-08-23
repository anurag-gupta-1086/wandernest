import React, { useState } from 'react';
import { Calendar, Download, Mail, Phone, ExternalLink, Award, TrendingUp, Users } from 'lucide-react';
import '../css/Home.css';

const Press = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pressReleases = [
    {
      id: 1,
      title: 'WanderNest Raises $25M Series B to Expand Global Experience Network',
      date: '2025-01-15',
      category: 'Funding',
      excerpt: 'Leading travel experience platform secures funding to accelerate international expansion and enhance AI-powered recommendation engine.',
      image: '/api/placeholder/400/200',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'WanderNest Launches Sustainable Travel Initiative with 1000+ Eco-Friendly Partners',
      date: '2024-12-10',
      category: 'Sustainability',
      excerpt: 'New program highlights carbon-neutral experiences and supports local communities through responsible tourism practices.',
      image: '/api/placeholder/400/200',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'WanderNest Named "Best Travel Platform 2024" by Travel Weekly',
      date: '2024-11-22',
      category: 'Awards',
      excerpt: 'Recognition highlights platform\'s innovation in connecting travelers with unique, authentic local experiences worldwide.',
      image: '/api/placeholder/400/200',
      readTime: '2 min read'
    },
    {
      id: 4,
      title: 'WanderNest Expands to 25 New Cities Across Asia-Pacific Region',
      date: '2024-10-08',
      category: 'Expansion',
      excerpt: 'Strategic expansion includes partnerships with over 2,000 local experience providers in Japan, Australia, and Southeast Asia.',
      image: '/api/placeholder/400/200',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'WanderNest Reports 300% Year-over-Year Growth in Bookings',
      date: '2024-09-15',
      category: 'Growth',
      excerpt: 'Platform reaches 500,000 monthly active users with significant growth in adventure and cultural experience categories.',
      image: '/api/placeholder/400/200',
      readTime: '3 min read'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
      fileSize: '2.3 MB',
      type: 'ZIP'
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of leadership team',
      fileSize: '5.1 MB',
      type: 'ZIP'
    },
    {
      title: 'Product Screenshots',
      description: 'Latest app and website interface images',
      fileSize: '8.7 MB',
      type: 'ZIP'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand style guide and usage instructions',
      fileSize: '1.8 MB',
      type: 'PDF'
    },
    {
      title: 'Fact Sheet',
      description: 'Company overview, statistics, and key milestones',
      fileSize: '245 KB',
      type: 'PDF'
    }
  ];

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'Funding', name: 'Funding' },
    { id: 'Sustainability', name: 'Sustainability' },
    { id: 'Awards', name: 'Awards' },
    { id: 'Expansion', name: 'Expansion' },
    { id: 'Growth', name: 'Growth' }
  ];

  const filteredReleases = selectedCategory === 'all' 
    ? pressReleases 
    : pressReleases.filter(release => release.category === selectedCategory);

  const stats = [
    { icon: <Users style={{ width: '32px', height: '32px', color: '#2563eb' }} />, value: '500K+', label: 'Active Users' },
    { icon: <Award style={{ width: '32px', height: '32px', color: '#f59e0b' }} />, value: '10K+', label: 'Experiences' },
    { icon: <TrendingUp style={{ width: '32px', height: '32px', color: '#10b981' }} />, value: '300%', label: 'YoY Growth' },
    { icon: <ExternalLink style={{ width: '32px', height: '32px', color: '#ef4444' }} />, value: '150+', label: 'Countries' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '50vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>Press & Media</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Latest news, updates, and resources about WanderNest
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem', transform: 'translateY(-50px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)', 
              textAlign: 'center' 
            }}>
              <div style={{ marginBottom: '1rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>{stat.value}</div>
              <div style={{ color: '#6b7280' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Contact */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem 4rem' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1f2937' }}>Media Contact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Sarah Martinez</h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Head of Communications</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Mail style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                <a href="mailto:press@wandernest.com" style={{ color: '#2563eb', textDecoration: 'none' }}>press@wandernest.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                <span style={{ color: '#6b7280' }}>+1 (555) 123-4567</span>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Media Inquiries</h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>For interview requests, product demos, or additional information</p>
              <button 
                onClick={() => alert('Media inquiry form would open here')}
                className="button-primary"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1f2937' }}>Latest News</h2>
          
          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  border: '1px solid #d1d5db',
                  backgroundColor: selectedCategory === category.id ? '#2563eb' : 'white',
                  color: selectedCategory === category.id ? 'white' : '#4b5563',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: selectedCategory === category.id ? '600' : '400'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div style={{ display: 'grid', gap: '2rem' }}>
            {filteredReleases.map(release => (
              <article key={release.id} style={{ 
                display: 'grid', 
                gridTemplateColumns: '300px 1fr', 
                gap: '2rem', 
                padding: '2rem', 
                backgroundColor: '#f9fafb', 
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ 
                  width: '300px', 
                  height: '200px', 
                  backgroundColor: '#e5e7eb', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Press Image</span>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ 
                      backgroundColor: '#e0e7ff', 
                      color: '#3730a3', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '12px', 
                      fontSize: '0.75rem', 
                      fontWeight: '600' 
                    }}>
                      {release.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#6b7280', fontSize: '0.875rem' }}>
                      <Calendar style={{ width: '14px', height: '14px' }} />
                      {new Date(release.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{release.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                    {release.title}
                  </h3>
                  <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {release.excerpt}
                  </p>
                  <button 
                    onClick={() => alert('Full press release would open here')}
                    style={{ 
                      color: '#2563eb', 
                      textDecoration: 'none', 
                      fontWeight: '600',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    Read Full Release <ExternalLink style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1f2937' }}>Media Kit</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {mediaKit.map((item, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              borderRadius: '12px', 
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <Download style={{ width: '24px', height: '24px', color: '#2563eb' }} />
                <span style={{ 
                  backgroundColor: '#f3f4f6', 
                  color: '#374151', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '12px', 
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {item.type}
                </span>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                {item.title}
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
                {item.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{item.fileSize}</span>
                <button 
                  onClick={() => alert('Download would start here')}
                  className="button-primary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{ backgroundColor: '#1f2937', color: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Stay Updated</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Subscribe to receive the latest news and updates from WanderNest
          </p>
          <div style={{ display: 'flex', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{ 
                flex: 1, 
                padding: '0.75rem', 
                borderRadius: '8px', 
                border: 'none',
                fontSize: '1rem'
              }}
            />
            <button 
              onClick={() => alert('Newsletter subscription would be processed here')}
              className="button-primary"
              style={{ padding: '0.75rem 1.5rem', backgroundColor: 'white', color: '#1f2937' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;