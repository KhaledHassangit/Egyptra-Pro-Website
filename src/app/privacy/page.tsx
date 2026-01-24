import Container from "@/util/Container";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Lock, Globe } from "lucide-react";

export default function PrivacyPage() {
  return (
    <Container className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-50 rounded-full">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Egypttra Travel Services, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          <div className="mt-6 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg inline-block">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <p className="text-gray-700">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-10">
          {/* Section 1 */}
          <section id="information-collection" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Lock className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    1.1 Personal Information
                  </h3>
                  <p className="text-gray-600 mb-4">Information you provide directly to us:</p>
                  <ul className="space-y-2">
                    {[
                      "Name and contact information",
                      "Passport details (when required for booking)",
                      "Payment information",
                      "Travel preferences and requirements",
                      "Special assistance needs",
                      "Communication preferences",
                      "Emergency contact details",
                      "Dietary restrictions and preferences",
                      "Travel insurance information",
                      "Loyalty program memberships"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-purple-600" />
                    1.2 Automatically Collected Information
                  </h3>
                  <p className="text-gray-600 mb-4">When you visit our website:</p>
                  <ul className="space-y-2">
                    {[
                      "IP address and device information",
                      "Browser type and version",
                      "Pages visited and interaction data",
                      "Booking and search history",
                      "Cookies and similar tracking technologies",
                      "Location data (if enabled)",
                      "Referral source",
                      "Session duration and timing"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 2 */}
          <section id="information-use" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Processing your bookings and reservations",
                    "Communicating about your bookings and services",
                    "Providing customer support",
                    "Sending promotional offers and newsletters",
                    "Improving our services and website experience",
                    "Ensuring compliance with legal obligations",
                    "Preventing fraud and ensuring security",
                    "Personalizing your travel experience",
                    "Conducting market research and analytics",
                    "Managing loyalty programs and rewards",
                    "Processing insurance claims",
                    "Coordinating with travel partners"
                  ].map((use, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 p-1 rounded">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{use}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sections 3-10 */}
          {[
            {
              id: "information-sharing",
              title: "3. Information Sharing and Disclosure",
              content: (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Service Providers</h3>
                  <p className="text-gray-700 mb-4">We may share your information with trusted third parties who assist us in:</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {["Processing payments", "Providing tour services", "Customer support", "Marketing and analytics", "Hotel and accommodation providers", "Transportation services"].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Legal Requirements</h3>
                  <p className="text-gray-700 mb-4">We may disclose your information if required by law or to:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Comply with legal obligations", "Protect our rights and property", "Prevent fraud or abuse", "Ensure user safety", "Respond to government requests", "Enforce our terms of service"].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )
            },
            {
              id: "data-security",
              title: "4. Data Security",
              content: (
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Encryption of sensitive data using industry-standard protocols",
                    "Secure payment processing through PCI-DSS compliant providers",
                    "Regular security assessments and penetration testing",
                    "Limited access based on role requirements",
                    "Employee training on data protection",
                    "24/7 system monitoring for suspicious activities",
                    "Regular backup procedures and disaster recovery planning",
                    "Multi-factor authentication for administrative access"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              )
            },
            {
              id: "rights-choices",
              title: "5. Your Rights and Choices",
              content: (
                <p className="text-gray-700">
                  You can manage cookie preferences through your browser settings. For detailed information about our cookie usage, please refer to our Cookie Policy.
                </p>
              )
            },
            {
              id: "cookies",
              title: "6. Cookies and Tracking Technologies",
              content: (
                <>
                  <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {[
                      "Remember your preferences and settings",
                      "Analyze website usage patterns",
                      "Personalize your experience",
                      "Improve our services",
                      "Maintain security and prevent fraud",
                      "Process online bookings",
                      "Track marketing campaign effectiveness",
                      "Enable social media integration"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700">
                    You can manage cookie preferences through your browser settings. For detailed information about our cookie usage, please refer to our Cookie Policy.
                  </p>
                </>
              )
            },
            {
              id: "children-privacy",
              title: "7. Children's Privacy",
              content: (
                <>
                  <p className="text-gray-700 mb-4">
                    Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-blue-800 font-medium">
                      For family bookings, all children's data must be provided and managed by their parent or legal guardian.
                    </p>
                  </div>
                </>
              )
            },
            {
              id: "international-transfers",
              title: "8. International Data Transfers",
              content: (
                <>
                  <p className="text-gray-700 mb-4">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place through:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Standard contractual clauses",
                      "Data processing agreements",
                      "Privacy Shield certification (where applicable)",
                      "Regular audits of data protection measures",
                      "Encryption during transfer and storage"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <Globe className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )
            },
            {
              id: "data-retention",
              title: "9. Retention of Personal Data",
              content: (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Fulfill the purposes outlined in this policy",
                      "Comply with legal obligations",
                      "Resolve disputes",
                      "Enforce our agreements"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="bg-gray-200 rounded-full p-1">
                          <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-gray-600 text-sm">
                      After this period, your data will be securely deleted or anonymized.
                    </p>
                  </div>
                </div>
              )
            },
            {
              id: "policy-updates",
              title: "10. Updates to This Policy",
              content: (
                <>
                  <p className="text-gray-700 mb-4">
                    We may update this Privacy Policy periodically to reflect:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { text: "Changes in our practices", color: "bg-blue-50" },
                      { text: "New regulatory requirements", color: "bg-purple-50" },
                      { text: "Improved security measures", color: "bg-green-50" },
                      { text: "Enhanced user protection", color: "bg-amber-50" }
                    ].map((item, index) => (
                      <div key={index} className={`${item.color} p-4 rounded-lg`}>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <p className="text-gray-700">
                      We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
                    </p>
                  </div>
                </>
              )
            }
          ].map((section, index) => (
            <section key={index} id={section.id} className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
              <Card>
                <CardContent className="p-6">{section.content}</CardContent>
              </Card>
            </section>
          ))}

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">11. Contact Us</h2>
              <p className="text-gray-600 mb-8">
                If you have questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-blue-600 hover:text-blue-800 transition-colors">
                        <a href="mailto:operations@egypttra.com">operations@egypttra.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-blue-600 hover:text-blue-800 transition-colors">
                        <a href="tel:+201011957868">+20 101 195 7868</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-700">Cairo, Egypt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Response Time</h3>
                      <p className="text-gray-700">Within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="font-semibold text-red-800">Urgent Privacy Concerns</h3>
                </div>
                <p className="text-red-700 text-sm">
                  For urgent privacy concerns or data breaches, please contact us immediately at our dedicated privacy hotline: 
                  <a href="tel:+201011957868" className="font-bold ml-1 hover:text-red-900">+20 101 195 7868</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}