import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronRight, Calendar, Shield, AlertTriangle } from 'lucide-react';
import '../css/Home.css';

const TermsOfService = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using WanderNest services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        "If you do not agree with any part of these terms, you may not use our services.",
        "These terms apply to all visitors, users, and others who access or use the service.",
        "WanderNest reserves the right to update these terms at any time without prior notice."
      ]
    },
    {
      title: "2. Service Description",
      content: [
        "WanderNest is a platform that connects travelers with local experience providers worldwide.",
        "We facilitate bookings but do not directly provide travel services, accommodations, or experiences.",
        "All experiences are provided by independent third-party operators.",
        "WanderNest acts as an intermediary between users and experience providers."
      ]
    },
    {
      title: "3. User Accounts and Registration",
      content: [
        "You must create an account to book experiences through our platform.",
        "You are responsible for maintaining the confidentiality of your account information.",
        "You must provide accurate, current, and complete information during registration.",
        "You are responsible for all activities that occur under your account.",
        "You must immediately notify us of any unauthorized use of your account."
      ]
    },
    {
      title: "4. Booking and Payment Terms",
      content: [
        "All bookings are subject to availability and confirmation by the experience provider.",
        "Prices are displayed in the currency specified and may include taxes and fees.",
        "Payment is required at the time of booking unless otherwise specified.",
        "We accept major credit cards and other payment methods as displayed on our platform.",
        "Currency conversion rates, if applicable, are determined by your payment provider."
      ]
    },
    {
      title: "5. Cancellation and Refund Policy",
      content: [
        "Cancellation policies vary by experience and are set by individual providers.",
        "Refund eligibility depends on the cancellation policy of the specific experience.",
        "Cancellations must be made through your WanderNest account or by contacting support.",
        "Processing fees may apply to cancellations and refunds.",
        "Weather-related cancellations are handled according to the provider's weather policy."
      ]
    },
    {
      title: "6. User Conduct and Prohibited Activities",
      content: [
        "You agree to use our services only for lawful purposes.",
        "You will not engage in any activity that could harm or interfere with our services.",
        "You will not attempt to gain unauthorized access to our systems or other users' accounts.",
        "You will not post or transmit any harmful, offensive, or inappropriate content.",
        "You will not use our platform for any commercial purpose without our written consent."
      ]
    },
    {
      title: "7. Intellectual Property Rights",
      content: [
        "All content on our platform is owned by WanderNest or our licensors.",
        "You may not copy, modify, distribute, or create derivative works from our content.",
        "User-generated content remains owned by you but you grant us a license to use it.",
        "Trademarks, logos, and service marks are the property of their respective owners.",
        "Any unauthorized use of our intellectual property may result in legal action."
      ]
    },
    {
      title: "8. Privacy and Data Protection",
      content: [
        "Your privacy is important to us and is governed by our Privacy Policy.",
        "We collect and process personal information as described in our Privacy Policy.",
        "We implement appropriate security measures to protect your personal information.",
        "You have rights regarding your personal data as outlined in our Privacy Policy.",
        "We may share information with experience providers as necessary to facilitate bookings."
      ]
    },
    {
      title: "9. Disclaimers and Limitation of Liability",
      content: [
        "Our services are provided 'as is' without any warranties, express or implied.",
        "We do not guarantee the accuracy, completeness, or reliability of any content.",
        "We are not liable for any damages arising from your use of our services.",
        "Our liability is limited to the maximum extent permitted by applicable law.",
        "You assume all risks associated with participating in booked experiences."
      ]
    },
    {
      title: "10. Third-Party Services and Links",
      content: [
        "Our platform may contain links to third-party websites or services.",
        "We are not responsible for the content or practices of third-party services.",
        "Your use of third-party services is subject to their own terms and policies.",
        "We do not endorse or recommend any third-party products or services.",
        "Any dealings with third parties are solely between you and that party."
      ]
    },
    {
      title: "11. Dispute Resolution and Governing Law",
      content: [
        "These terms are governed by the laws of [Jurisdiction] without regard to conflict of law provisions.",
        "Any disputes will be resolved through binding arbitration in [Location].",
        "You waive any right to participate in class-action lawsuits or class-wide arbitrations.",
        "If any provision of these terms is found unenforceable, the remainder shall remain in effect.",
        "We may seek injunctive relief in court for any breach of these terms."
      ]
    },
    {
      title: "12. Modifications and Termination",
      content: [
        "We reserve the right to modify or discontinue our services at any time.",
        "We may update these terms and will notify users of material changes.",
        "We may suspend or terminate your account for violation of these terms.",
        "Upon termination, your right to use our services will immediately cease.",
        "Provisions that should survive termination will remain in effect."
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '40vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center', color: 'white' }}>
          <FileText style={{ width: '64px', height: '64px', margin: '0 auto 1rem', opacity: 0.9 }} />
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>Terms of Service</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
            Please read these terms carefully before using WanderNest services
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1rem' }}>
        <div style={{ 
          backgroundColor: '#eff6ff', 
          padding: '1rem', 
          borderRadius: '8px', 
          border: '1px solid #bfdbfe',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          color: '#1e40af'
        }}>
          <Calendar style={{ width: '16px', height: '16px' }} />
          <span>Last updated: January 15, 2025</span>
        </div>
      </section>

      {/* Terms Content */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem 4rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
          {sections.map((section, index) => (
            <div key={index} style={{ borderBottom: index < sections.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
              <button
                onClick={() => toggleSection(index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937'
                }}
              >
                <span>{section.title}</span>
                {expandedSection === index ? 
                  <ChevronDown style={{ width: '20px', height: '20px', color: '#6b7280' }} /> :
                  <ChevronRight style={{ width: '20px', height: '20px', color: '#6b7280' }} />
                }
              </button>
              
              {expandedSection === index && (
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                  <div style={{ borderLeft: '3px solid #2563eb', paddingLeft: '1rem' }}>
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} style={{ 
                        color: '#4b5563', 
                        lineHeight: '1.7', 
                        marginBottom: pIndex < section.content.length - 1 ? '1rem' : '0',
                        fontSize: '0.95rem'
                      }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Important Notices */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', color: '#1f2937' }}>
            Important Information
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ 
              backgroundColor: '#fef3c7', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid #fbbf24',
              display: 'flex',
              gap: '1rem'
            }}>
              <AlertTriangle style={{ width: '24px', height: '24px', color: '#d97706', flexShrink: 0, marginTop: '0.125rem' }} />
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#92400e', marginBottom: '0.5rem' }}>
                  Travel Risks and Responsibilities
                </h3>
                <p style={{ color: '#a16207', lineHeight: '1.6', fontSize: '0.875rem' }}>
                  Participation in travel experiences involves inherent risks. You acknowledge and assume all risks 
                  associated with travel and activities. WanderNest strongly recommends purchasing comprehensive travel insurance.
                </p>
              </div>
            </div>

            <div style={{ 
              backgroundColor: '#ecfdf5', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid #10b981',
              display: 'flex',
              gap: '1rem'
            }}>
              <Shield style={{ width: '24px', height: '24px', color: '#059669', flexShrink: 0, marginTop: '0.125rem' }} />
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#065f46', marginBottom: '0.5rem' }}>
                  Data Protection and Privacy
                </h3>
                <p style={{ color: '#047857', lineHeight: '1.6', fontSize: '0.875rem' }}>
                  We are committed to protecting your personal information. Please review our Privacy Policy to understand 
                  how we collect, use, and protect your data in compliance with applicable privacy laws.
                </p>
              </div>
            </div>

            <div style={{ 
              backgroundColor: '#eff6ff', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid #3b82f6',
              display: 'flex',
              gap: '1rem'
            }}>
              <FileText style={{ width: '24px', height: '24px', color: '#2563eb', flexShrink: 0, marginTop: '0.125rem' }} />
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>
                  Questions About These Terms
                </h3>
                <p style={{ color: '#1d4ed8', lineHeight: '1.6', fontSize: '0.875rem' }}>
                  If you have any questions about these Terms of Service, please contact our legal team at 
                  legal@wandernest.com or through our customer support channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Legal Team */}
      <section style={{ backgroundColor: '#1f2937', color: 'white', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Need Legal Assistance?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            For questions about these terms or legal matters, contact our legal department.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => alert('Legal contact form would open here')}
              className="button-primary"
              style={{ padding: '1rem 1.5rem', backgroundColor: 'white', color: '#1f2937' }}
            >
              Contact Legal Team
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
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
              General Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;