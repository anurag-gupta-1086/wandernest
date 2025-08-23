import React from 'react';
import { MapPin, Users, Award, Globe, Heart, Zap } from 'lucide-react';
import '../css/Home.css';

const AboutUs = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '60vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>About WanderNest</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Connecting travelers with extraordinary experiences since 2020
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1f2937' }}>Our Mission</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#6b7280', marginBottom: '1.5rem' }}>
              At WanderNest, we believe that travel has the power to transform lives, bridge cultures, and create lasting memories. 
              Our mission is to make extraordinary experiences accessible to everyone, anywhere in the world.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#6b7280' }}>
              We partner with local guides, authentic venues, and passionate experience creators to offer you unique adventures 
              that go beyond traditional tourism.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Globe style={{ width: '200px', height: '200px', color: '#2563eb', opacity: 0.8 }} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
            Our Impact in Numbers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#2563eb', marginBottom: '0.5rem' }}>500K+</div>
              <div style={{ fontSize: '1.125rem', color: '#6b7280' }}>Happy Travelers</div>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#2563eb', marginBottom: '0.5rem' }}>10K+</div>
              <div style={{ fontSize: '1.125rem', color: '#6b7280' }}>Unique Experiences</div>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#2563eb', marginBottom: '0.5rem' }}>150+</div>
              <div style={{ fontSize: '1.125rem', color: '#6b7280' }}>Countries</div>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#2563eb', marginBottom: '0.5rem' }}>5,000+</div>
              <div style={{ fontSize: '1.125rem', color: '#6b7280' }}>Local Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
          Our Values
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <Heart style={{ width: '48px', height: '48px', color: '#ef4444', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Authentic Experiences</h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              We curate genuine, local experiences that connect you with the heart and soul of each destination.
            </p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <Users style={{ width: '48px', height: '48px', color: '#10b981', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Community First</h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              We support local communities by partnering with local guides and businesses, ensuring tourism benefits everyone.
            </p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <Award style={{ width: '48px', height: '48px', color: '#f59e0b', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Quality Assurance</h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Every experience is carefully vetted and monitored to ensure the highest standards of quality and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
            Meet Our Leadership Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: '#e5e7eb', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users style={{ width: '48px', height: '48px', color: '#6b7280' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>Sarah Johnson</h3>
              <p style={{ color: '#2563eb', marginBottom: '1rem' }}>CEO & Founder</p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Former travel industry executive with 15 years of experience in creating memorable travel experiences.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: '#e5e7eb', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap style={{ width: '48px', height: '48px', color: '#6b7280' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>Michael Chen</h3>
              <p style={{ color: '#2563eb', marginBottom: '1rem' }}>CTO</p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Tech innovator passionate about using technology to connect people with amazing experiences worldwide.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ width: '120px', height: '120px', backgroundColor: '#e5e7eb', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin style={{ width: '48px', height: '48px', color: '#6b7280' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1f2937' }}>Elena Rodriguez</h3>
              <p style={{ color: '#2563eb', marginBottom: '1rem' }}>Head of Operations</p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Operations expert ensuring seamless experiences for travelers and partners across all destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ backgroundColor: '#1f2937', color: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Join thousands of travelers who trust WanderNest to create their perfect adventure.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="button-primary" 
            style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
          >
            Explore Experiences
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;