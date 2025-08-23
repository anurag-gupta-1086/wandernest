import React from 'react';
import { Shield, AlertTriangle, Phone, MapPin, Users, CheckCircle, Heart, Globe } from 'lucide-react';
import '../css/Home.css';

const Safety = () => {
  const safetyMeasures = [
    {
      icon: <Shield style={{ width: '32px', height: '32px', color: '#2563eb' }} />,
      title: 'Verified Providers',
      description: 'All experience providers undergo thorough background checks and certification processes.',
      details: [
        'Background verification for all guides and operators',
        'Valid insurance and licensing requirements',
        'Regular safety audits and inspections',
        'Customer feedback monitoring and review'
      ]
    },
    {
      icon: <Users style={{ width: '32px', height: '32px', color: '#10b981' }} />,
      title: 'Professional Guides',
      description: 'Our guides are trained professionals with extensive local knowledge and safety expertise.',
      details: [
        'Certified first aid and emergency response training',
        'Local area expertise and risk awareness',
        'Regular training updates and assessments',
        'Clear communication in multiple languages'
      ]
    },
    {
      icon: <CheckCircle style={{ width: '32px', height: '32px', color: '#f59e0b' }} />,
      title: 'Safety Equipment',
      description: 'All necessary safety equipment is provided and regularly maintained for optimal protection.',
      details: [
        'High-quality, regularly inspected safety gear',
        'Age-appropriate equipment sizing',
        'Clear usage instructions and demonstrations',
        'Backup equipment available when needed'
      ]
    },
    {
      icon: <Heart style={{ width: '32px', height: '32px', color: '#ef4444' }} />,
      title: 'Health Support',
      description: 'We prioritize your health and well-being throughout every experience.',
      details: [
        'Health and fitness requirement assessments',
        'Medical condition disclosure and accommodation',
        'Emergency medical response protocols',
        'Hygiene and sanitation standards'
      ]
    }
  ];

  const emergencyContacts = [
    {
      title: '24/7 Emergency Hotline',
      contact: '+1 (555) HELP-NOW',
      description: 'Immediate assistance for urgent situations during your experience',
      available: 'Available 24/7 worldwide'
    },
    {
      title: 'Local Emergency Services',
      contact: 'Varies by location',
      description: 'Direct connection to local police, fire, and medical services',
      available: 'Coordinates provided with booking'
    },
    {
      title: 'WanderNest Support',
      contact: 'support@wandernest.com',
      description: 'Non-urgent issues and general safety concerns',
      available: 'Response within 2 hours'
    }
  ];

  const safetyGuidelines = [
    {
      category: 'Before You Go',
      icon: <MapPin style={{ width: '24px', height: '24px', color: '#2563eb' }} />,
      tips: [
        'Review all activity requirements and restrictions',
        'Inform us of any medical conditions or concerns',
        'Check weather conditions and dress appropriately',
        'Share your itinerary with friends or family',
        'Arrive at meeting points 15 minutes early'
      ]
    },
    {
      category: 'During Your Experience',
      icon: <Shield style={{ width: '24px', height: '24px', color: '#10b981' }} />,
      tips: [
        'Follow all instructions from your guide',
        'Stay with the group at all times',
        'Use provided safety equipment properly',
        'Ask questions if you\'re unsure about anything',
        'Report any concerns immediately to your guide'
      ]
    },
    {
      category: 'Emergency Situations',
      icon: <AlertTriangle style={{ width: '24px', height: '24px', color: '#f59e0b' }} />,
      tips: [
        'Stay calm and follow your guide\'s instructions',
        'Use emergency contact numbers provided',
        'Keep emergency contacts easily accessible',
        'Know the location of nearest medical facilities',
        'Document any incidents for insurance purposes'
      ]
    }
  ];

  const travelTips = [
    {
      title: 'Travel Insurance',
      content: 'We strongly recommend comprehensive travel insurance covering activities, medical emergencies, and trip cancellations.'
    },
    {
      title: 'Health Preparations',
      content: 'Consult your doctor about vaccinations and health precautions specific to your destination.'
    },
    {
      title: 'Documentation',
      content: 'Ensure your passport, visas, and other travel documents are valid and easily accessible.'
    },
    {
      title: 'Local Laws & Customs',
      content: 'Research and respect local laws, customs, and cultural practices in your destination.'
    },
    {
      title: 'Weather Awareness',
      content: 'Monitor weather conditions and be prepared for changes that might affect your activities.'
    },
    {
      title: 'Communication',
      content: 'Keep important phone numbers saved and consider international roaming or local SIM cards.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '50vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center', color: 'white' }}>
          <Shield style={{ width: '64px', height: '64px', margin: '0 auto 1rem', opacity: 0.9 }} />
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>Safety & Security</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Your safety is our top priority. Learn about our comprehensive safety measures and guidelines.
          </p>
        </div>
      </section>

      {/* Safety Overview */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
            Our Commitment to Your Safety
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>
            We've implemented comprehensive safety measures across all our experiences to ensure you can explore 
            the world with confidence and peace of mind.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {safetyMeasures.map((measure, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}>{measure.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                {measure.title}
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {measure.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {measure.details.map((detail, idx) => (
                  <li key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    marginBottom: '0.5rem',
                    color: '#4b5563',
                    fontSize: '0.875rem'
                  }}>
                    <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981', flexShrink: 0 }} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Contacts */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
            Emergency Contacts
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {emergencyContacts.map((contact, index) => (
              <div key={index} style={{ 
                backgroundColor: '#fef2f2', 
                padding: '2rem', 
                borderRadius: '12px',
                border: '2px solid #fecaca',
                textAlign: 'center'
              }}>
                <Phone style={{ width: '32px', height: '32px', color: '#dc2626', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#dc2626', marginBottom: '0.5rem' }}>
                  {contact.title}
                </h3>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>
                  {contact.contact}
                </div>
                <p style={{ color: '#7f1d1d', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
                  {contact.description}
                </p>
                <div style={{ fontSize: '0.75rem', color: '#991b1b', fontWeight: '600' }}>
                  {contact.available}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
          Safety Guidelines
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {safetyGuidelines.map((guideline, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {guideline.icon}
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>
                  {guideline.category}
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {guideline.tips.map((tip, idx) => (
                  <li key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'start', 
                    gap: '0.75rem', 
                    marginBottom: '0.75rem',
                    color: '#4b5563',
                    lineHeight: '1.5'
                  }}>
                    <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981', marginTop: '0.125rem', flexShrink: 0 }} />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Safety Tips */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: '#1f2937' }}>
            General Travel Safety Tips
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {travelTips.map((tip, index) => (
              <div key={index} style={{ 
                backgroundColor: '#f8fafc', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                  {tip.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.875rem' }}>
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVID-19 Safety */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem' }}>
        <div style={{ 
          backgroundColor: '#eff6ff', 
          padding: '3rem', 
          borderRadius: '16px',
          border: '2px solid #bfdbfe',
          textAlign: 'center'
        }}>
          <Globe style={{ width: '48px', height: '48px', color: '#2563eb', margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937' }}>
            COVID-19 Safety Measures
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#374151', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            We continue to follow enhanced health and safety protocols to protect our travelers and partners. 
            All experiences comply with local health guidelines and WHO recommendations.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <CheckCircle style={{ width: '24px', height: '24px', color: '#10b981', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '0.875rem', color: '#374151' }}>Enhanced sanitization</div>
            </div>
            <div>
              <CheckCircle style={{ width: '24px', height: '24px', color: '#10b981', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '0.875rem', color: '#374151' }}>Flexible cancellation</div>
            </div>
            <div>
              <CheckCircle style={{ width: '24px', height: '24px', color: '#10b981', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '0.875rem', color: '#374151' }}>Social distancing</div>
            </div>
            <div>
              <CheckCircle style={{ width: '24px', height: '24px', color: '#10b981', margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '0.875rem', color: '#374151' }}>Health screenings</div>
            </div>
          </div>
          <button 
            onClick={() => alert('COVID-19 safety details would open here')}
            className="button-primary"
            style={{ padding: '0.75rem 1.5rem' }}
          >
            View Full COVID-19 Guidelines
          </button>
        </div>
      </section>

      {/* Report Safety Concern */}
      <section style={{ backgroundColor: '#1f2937', color: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <AlertTriangle style={{ width: '48px', height: '48px', margin: '0 auto 1rem', opacity: 0.9 }} />
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Report a Safety Concern</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            If you experienced or witnessed any safety issues during an experience, please let us know immediately. 
            Your feedback helps us maintain the highest safety standards.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => alert('Safety report form would open here')}
              className="button-primary"
              style={{ padding: '1rem 1.5rem', backgroundColor: '#dc2626', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <AlertTriangle style={{ width: '18px', height: '18px' }} />
              Report Safety Issue
            </button>
            <button 
              onClick={() => alert('Emergency contact form would open here')}
              style={{ 
                padding: '1rem 1.5rem', 
                border: '1px solid #4b5563', 
                backgroundColor: 'transparent', 
                color: 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Emergency Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;