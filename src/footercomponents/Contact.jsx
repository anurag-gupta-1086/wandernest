import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HeadphonesIcon, Globe } from 'lucide-react';
import '../css/Home.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', category: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail style={{ width: '24px', height: '24px', color: '#2563eb' }} />,
      title: 'Email Support',
      description: 'Get help with bookings, account issues, or general questions',
      contact: 'support@wandernest.com',
      response: 'Response within 4 hours'
    },
    {
      icon: <Phone style={{ width: '24px', height: '24px', color: '#10b981' }} />,
      title: 'Phone Support',
      description: 'Speak directly with our customer service team',
      contact: '+1 (555) 123-4567',
      response: 'Available 24/7'
    },
    {
      icon: <MessageSquare style={{ width: '24px', height: '24px', color: '#f59e0b' }} />,
      title: 'Live Chat',
      description: 'Instant support for urgent booking questions',
      contact: 'Chat available on website',
      response: 'Average wait: 2 minutes'
    },
    {
      icon: <HeadphonesIcon style={{ width: '24px', height: '24px', color: '#ef4444' }} />,
      title: 'WhatsApp',
      description: 'Quick support via WhatsApp messaging',
      contact: '+1 (555) 987-6543',
      response: 'Response within 1 hour'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Market Street, Suite 500\nSan Francisco, CA 94103',
      phone: '+1 (415) 555-0100',
      email: 'sf@wandernest.com',
      hours: 'Mon-Fri: 9AM-6PM PST'
    },
    {
      city: 'London',
      country: 'UK',
      address: '45 Shoreditch High Street\nLondon E1 6PJ, United Kingdom',
      phone: '+44 20 7123 4567',
      email: 'london@wandernest.com',
      hours: 'Mon-Fri: 9AM-5PM GMT'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '1 Raffles Place, #20-61\nSingapore 048616',
      phone: '+65 6123 4567',
      email: 'singapore@wandernest.com',
      hours: 'Mon-Fri: 9AM-6PM SGT'
    }
  ];

  const categories = [
    { value: '', label: 'Select a category' },
    { value: 'booking', label: 'Booking Support' },
    { value: 'technical', label: 'Technical Issues' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'press', label: 'Press & Media' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '40vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            We're here to help you plan your perfect adventure
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
          Get in Touch
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {contactMethods.map((method, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              textAlign: 'center',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}>{method.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                {method.title}
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem', lineHeight: '1.6' }}>
                {method.description}
              </p>
              <div style={{ fontSize: '1rem', fontWeight: '600', color: '#2563eb', marginBottom: '0.5rem' }}>
                {method.contact}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#10b981' }}>
                {method.response}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', color: '#1f2937' }}>Send us a Message</h2>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ 
                    padding: '0.75rem', 
                    borderRadius: '8px', 
                    border: '1px solid #d1d5db',
                    fontSize: '1rem'
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ 
                    padding: '0.75rem', 
                    borderRadius: '8px', 
                    border: '1px solid #d1d5db',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                style={{ 
                  padding: '0.75rem', 
                  borderRadius: '8px', 
                  border: '1px solid #d1d5db',
                  fontSize: '1rem',
                  backgroundColor: 'white'
                }}
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{ 
                  padding: '0.75rem', 
                  borderRadius: '8px', 
                  border: '1px solid #d1d5db',
                  fontSize: '1rem'
                }}
              />
              
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{ 
                  padding: '0.75rem', 
                  borderRadius: '8px', 
                  border: '1px solid #d1d5db',
                  fontSize: '1rem',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              />
              
              <button
                type="submit"
                className="button-primary"
                style={{ 
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem'
                }}
              >
                <Send style={{ width: '18px', height: '18px' }} />
                Send Message
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', color: '#1f2937' }}>Our Offices</h2>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {offices.map((office, index) => (
                <div key={index} style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#f9fafb', 
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <MapPin style={{ width: '20px', height: '20px', color: '#2563eb' }} />
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>
                      {office.city}, {office.country}
                    </h3>
                  </div>
                  
                  <div style={{ marginBottom: '1rem', color: '#4b5563', lineHeight: '1.6' }}>
                    {office.address.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                  
                  <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Phone style={{ width: '16px', height: '16px' }} />
                      <span>{office.phone}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Mail style={{ width: '16px', height: '16px' }} />
                      <span>{office.email}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock style={{ width: '16px', height: '16px' }} />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {[
            {
              question: 'How do I cancel or modify my booking?',
              answer: 'You can cancel or modify your booking up to 24 hours before the experience starts through your account dashboard or by contacting our support team.'
            },
            {
              question: 'What if my experience is cancelled due to weather?',
              answer: 'If an experience is cancelled due to weather conditions, you\'ll receive a full refund or the option to reschedule to another date at no additional cost.'
            },
            {
              question: 'Do you offer group discounts?',
              answer: 'Yes! We offer special rates for groups of 8 or more people. Contact our team for custom pricing and group booking assistance.'
            },
            {
              question: 'How do I become an experience provider?',
              answer: 'We\'re always looking for unique experiences to add to our platform. Visit our Partner portal or contact our partnership team to learn about joining WanderNest.'
            }
          ].map((faq, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              borderRadius: '12px',
              boxShadow: '0 2px 4px -1px rgb(0 0 0 / 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                {faq.question}
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Contact */}
      <section style={{ backgroundColor: '#fef2f2', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#dc2626', marginBottom: '1rem' }}>
            24/7 Emergency Support
          </h2>
          <p style={{ color: '#7f1d1d', marginBottom: '1.5rem' }}>
            If you need immediate assistance while on your trip or experience, contact our emergency support line:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Phone style={{ width: '20px', height: '20px', color: '#dc2626' }} />
            <span style={{ fontSize: '1.25rem', fontWeight: '600', color: '#dc2626' }}>+1 (555) HELP-NOW</span>
          </div>
          <p style={{ color: '#7f1d1d', fontSize: '0.875rem' }}>
            Available 24/7 in multiple languages for urgent travel assistance
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;