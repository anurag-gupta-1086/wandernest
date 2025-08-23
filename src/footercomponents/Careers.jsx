import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Briefcase, Heart, Globe, Search } from 'lucide-react';
import '../css/Home.css';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      description: 'Build amazing user experiences for our travel platform using React, TypeScript, and modern web technologies.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'UI/UX design sense', 'Remote work experience'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Travel Experience Curator',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$55,000 - $70,000',
      description: 'Research, evaluate, and onboard unique travel experiences from around the world.',
      requirements: ['Travel industry experience', 'Strong communication skills', 'Attention to detail', 'Multilingual preferred'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      description: 'Ensure our travelers have amazing experiences from booking to completion.',
      requirements: ['Customer service experience', 'Problem-solving skills', 'Travel industry knowledge', 'CRM experience'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$50,000 - $65,000',
      description: 'Drive growth through digital marketing campaigns and content creation.',
      requirements: ['Digital marketing experience', 'Content creation skills', 'Analytics expertise', 'Social media savvy'],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
      description: 'Analyze user behavior and business metrics to drive data-informed decisions.',
      requirements: ['SQL proficiency', 'Python/R experience', 'Data visualization skills', 'Business acumen'],
      posted: '1 day ago'
    },
    {
      id: 6,
      title: 'Partnership Manager',
      department: 'Business Development',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£45,000 - £60,000',
      description: 'Build and manage relationships with local experience providers worldwide.',
      requirements: ['Partnership experience', 'International business', 'Negotiation skills', 'Travel industry knowledge'],
      posted: '4 days ago'
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'Engineering', name: 'Engineering' },
    { id: 'Operations', name: 'Operations' },
    { id: 'Customer Success', name: 'Customer Success' },
    { id: 'Marketing', name: 'Marketing' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Business Development', name: 'Business Development' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'Remote', name: 'Remote' },
    { id: 'New York, NY', name: 'New York, NY' },
    { id: 'San Francisco, CA', name: 'San Francisco, CA' },
    { id: 'Austin, TX', name: 'Austin, TX' },
    { id: 'London, UK', name: 'London, UK' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  const benefits = [
    {
      icon: <Heart style={{ width: '32px', height: '32px', color: '#ef4444' }} />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness stipend'
    },
    {
      icon: <Globe style={{ width: '32px', height: '32px', color: '#2563eb' }} />,
      title: 'Travel Perks',
      description: 'Annual travel budget, discounted experiences, and workation opportunities'
    },
    {
      icon: <Users style={{ width: '32px', height: '32px', color: '#10b981' }} />,
      title: 'Team Culture',
      description: 'Inclusive environment, team events, and professional development opportunities'
    },
    {
      icon: <DollarSign style={{ width: '32px', height: '32px', color: '#f59e0b' }} />,
      title: 'Competitive Pay',
      description: 'Market-competitive salaries, equity participation, and performance bonuses'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '60vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>Join Our Team</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Help us connect the world through extraordinary travel experiences
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>50+</div>
              <div>Team Members</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>12</div>
              <div>Countries</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>4.8★</div>
              <div>Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
          Why Work at WanderNest?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem' }}>{benefit.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>{benefit.title}</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
            Open Positions
          </h2>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <select 
              value={selectedDepartment} 
              onChange={(e) => setSelectedDepartment(e.target.value)}
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white' }}
            >
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white' }}
            >
              {locations.map(loc => (
                <option key={loc.id} value={loc.id}>{loc.name}</option>
              ))}
            </select>
          </div>

          {/* Job Listings */}
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {filteredJobs.map(job => (
              <div key={job.id} style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Briefcase style={{ width: '16px', height: '16px' }} />
                        {job.department}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin style={{ width: '16px', height: '16px' }} />
                        {job.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock style={{ width: '16px', height: '16px' }} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#2563eb', marginBottom: '0.25rem' }}>{job.salary}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{job.posted}</div>
                  </div>
                </div>
                
                <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: '1.6' }}>{job.description}</p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>Requirements:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {job.requirements.map((req, index) => (
                      <span key={index} style={{ 
                        backgroundColor: '#e0e7ff', 
                        color: '#3730a3', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '20px', 
                        fontSize: '0.875rem' 
                      }}>
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="button-primary"
                  onClick={() => alert('Application form would open here')}
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
              <Search style={{ width: '48px', height: '48px', margin: '0 auto 1rem' }} />
              <h3>No positions found</h3>
              <p>Try adjusting your filters or check back later for new openings</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ backgroundColor: '#1f2937', color: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Don't See the Perfect Role?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            We're always looking for talented people to join our team. Send us your resume and tell us how you'd like to contribute.
          </p>
          <button 
            onClick={() => alert('Contact form would open here')}
            className="button-primary" 
            style={{ padding: '1rem 2rem', fontSize: '1.125rem', backgroundColor: 'white', color: '#1f2937' }}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;