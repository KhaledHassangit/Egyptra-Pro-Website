import React from 'react';
import { 
  Eye,
  Database, 
  Zap, 
  Users, 
  Shield, 
  Lock, 
  Mail, 
  Cookie, 
  Calendar, 
  RefreshCw, 
  Phone,
  MapPin,
  Send
} from "lucide-react";
import Container from '@/util/Container';
import PageHero from '@/util/PageHero';

export default function PrivacyPage() {
  return (
    <>
     <PageHero 
        title="Privacy Policy" 
        currentPage="Privacy Policy" 
        currentPageUrl="/privacy" 
      />
      <Container className="mx-auto py-20">
        <div className="space-y-6">
          
          <section className="bg-white rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Overview and Content</h2>
                <p className="text-gray-500 text-sm">Understanding our privacy practices</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy describes how Egyptra Travel ("we," "us," or "our") collects, uses, and shares your personal information when you use our website, book tours, or interact with our services.
            </p>
            
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information We Collect:</h3>
              <ul className="space-y-2.5">
                {[
                  "Personal identification information (name, email, phone number)",
                  "Booking and travel preferences",
                  "Payment information",
                  "Passport and identification details (for international travel)",
                  "Travel insurance information",
                  "Communication history with our support team",
                  "Website usage data and cookies"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">How We Use Your Information</h2>
                <p className="text-gray-500 text-sm">Learn how your data helps us serve you better</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">We use your personal information to:</p>
            <ul className="space-y-2.5">
              {[
                "Process your bookings and reservations",
                "Provide customer support and respond to your inquiries",
                "Send booking confirmations and travel updates",
                "Process payments and prevent fraud",
                "Personalize your experience and recommend relevant tours",
                "Comply with legal obligations and regulations",
                "Improve our services and website functionality",
                "Send promotional offers (with your consent)"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Information Sharing and Disclosure</h2>
                <p className="text-gray-500 text-sm">Who we share your information with and why</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">We may share your personal information with:</p>
            <ul className="space-y-3">
              {[
                { title: "Service Providers:", desc: "Hotels, tour operators, transportation companies necessary to fulfill your booking" },
                { title: "Payment Processors:", desc: "Secure payment gateways to process transactions" },
                { title: "Travel Insurance Partners:", desc: "If you opt for travel insurance" },
                { title: "Government Authorities:", desc: "When required by law or for visa processing" },
                { title: "Analytics Partners:", desc: "To understand website usage (anonymized data)" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">
                    <span className="font-semibold text-gray-900">{item.title}</span> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600">
              We do not sell your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Data Security</h2>
                <p className="text-gray-500 text-sm">How we protect your information</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">We implement industry-standard security measures to protect your personal data:</p>
            <ul className="space-y-2.5">
              {[
                "SSL/TLS encryption for all data transmission",
                "Secure payment processing through PCI-DSS compliant providers",
                "Regular security audits and vulnerability assessments",
                "Access controls and authentication measures",
                "Employee training on data protection practices",
                "Regular backups and disaster recovery procedures"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h4 className="font-semibold text-gray-900 mb-1">Important Note:</h4>
              <p className="text-gray-600 text-sm">
                While we strive to protect your personal data, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and keep your login credentials confidential.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Your Rights and Choices</h2>
                <p className="text-gray-500 text-sm">You have control over your personal data</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Access", desc: "Request a copy of your personal data we hold" },
                { title: "Correction", desc: "Update or correct inaccurate information" },
                { title: "Deletion", desc: "Request deletion of your personal data" },
                { title: "Portability", desc: "Receive your data in a portable format" },
                { title: "Opt-Out", desc: "Unsubscribe from marketing communications" },
                { title: "Object", desc: "Object to processing of your personal data" }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Promotional Marketing Communications</h2>
                <p className="text-gray-500 text-sm">Managing your communication preferences</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              With your consent, we may send you promotional emails about special offers, new tours, and travel tips. You can opt out at any time by:
            </p>
            <ul className="space-y-2.5">
              {[
                'Clicking the "Unsubscribe" link in any promotional email',
                "Updating your preferences in your account settings",
                "Contacting our customer support team"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-pink-50 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> Even if you opt out of promotional emails, we will still send you transactional emails related to your bookings and account.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Cookies</h2>
                <p className="text-gray-500 text-sm">How we use cookies and similar technologies</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.
            </p>
            <h4 className="font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h4>
            <ul className="space-y-2.5">
              {[
                { title: "Essential Cookies:", desc: "Required for basic website functionality" },
                { title: "Performance Cookies:", desc: "Help us understand how visitors use our site" },
                { title: "Functionality Cookies:", desc: "Remember your preferences and settings" },
                { title: "Targeting Cookies:", desc: "Deliver relevant advertisements" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">
                    <span className="font-semibold text-gray-900">{item.title}</span> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-4">
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Retention of Personal Data</h2>
                <p className="text-gray-500 text-sm">How long we keep your information</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              We retain your personal data only as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
            </p>
            <ul className="space-y-2.5">
              {[
                { title: "Booking Data:", desc: "Retained for 7 years for legal and accounting purposes" },
                { title: "Marketing Data:", desc: "Until you opt out or request deletion" },
                { title: "Account Data:", desc: "Until you close your account" },
                { title: "Support Communications:", desc: "Retained for 3 years" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-gray-600">
                    <span className="font-semibold text-gray-900">{item.title}</span> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Changes to This Policy</h2>
                <p className="text-gray-500 text-sm">Stay informed about updates</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
            </p>
            <ul className="space-y-2.5">
              {[
                "Posting the updated policy on our website",
                'Updating the "Last updated" date at the top of this policy',
                "Sending you an email notification for significant changes"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-4">
              We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className="bg-blue-600 rounded-2xl p-8 shadow-sm" style={{border: '0.8px solid #E5E7EB', borderRadius: '16px', padding: '32px'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Contact Us</h2>
                <p className="text-blue-100 text-sm">Have questions about this privacy policy?</p>
              </div>
            </div>
            <p className="text-white mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Send className="w-4 h-4 text-white" />
                  <h4 className="font-semibold text-white">Email</h4>
                </div>
                <a href="mailto:privacy@egyptra.com" className="text-blue-100 hover:text-white text-sm">
                  privacy@egyptra.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-white" />
                  <h4 className="font-semibold text-white">Phone</h4>
                </div>
                <a href="tel:+18001234567" className="text-blue-100 hover:text-white text-sm">
                  +1 (800) 123-4567
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-white" />
                  <h4 className="font-semibold text-white">Address</h4>
                </div>
                <p className="text-blue-100 text-sm">
                  123 Travel Street, Cairo, Egypt
                </p>
              </div>
            </div>
            <p className="text-white mt-6 text-sm">
              We will respond to your inquiry within 30 days.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}