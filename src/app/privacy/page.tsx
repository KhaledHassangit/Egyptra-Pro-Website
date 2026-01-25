import Container from "@/util/Container";
import PageHero from "@/util/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero 
        title="Privacy Policy" 
        currentPage="Privacy Policy" 
        currentPageUrl="/privacy" 
      />
      
      <Container className="py-12 md:py-20">
        {/* Main Content Card */}
        <div className="mx-auto">
          {/* Introduction with gradient card */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-white to-secondary/5 p-8 md:p-10 border border-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full translate-y-20 -translate-x-20"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-8 bg-primary rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Protecting Your Privacy</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Egyptra Pro, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {/* Section 1 - Information Collection */}
            <section className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl -z-10"></div>
              <div className="flex items-start gap-6">
                <div className="hidden md:block flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Information We Collect</h2>
                    <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
                  </div>
                  
                  <div className="space-y-10 mt-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
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
                          <div key={index} className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-sm transition-all duration-300">
                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-gray-700 group-hover:text-gray-900">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Automated Collection */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        Automatically Collected Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
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
                          <div key={index} className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-secondary/50 hover:shadow-sm transition-all duration-300">
                            <div className="w-6 h-6 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            </div>
                            <span className="text-gray-700 group-hover:text-gray-900">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 - How We Use Information */}
            <section className="relative">
              <div className="absolute -inset-4 bg-gradient-to-l from-secondary/5 to-transparent rounded-3xl -z-10"></div>
              <div className="flex items-start gap-6">
                <div className="hidden md:block flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-yellow-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How We Use Your Information</h2>
                    <div className="w-16 h-1 bg-secondary rounded-full mt-3"></div>
                  </div>
                  
                  <p className="text-gray-600 mb-8">We use your personal information for the following purposes:</p>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { text: "Processing bookings and reservations", color: "from-blue-50 to-blue-100/50" },
                      { text: "Customer support and communication", color: "from-green-50 to-green-100/50" },
                      { text: "Service improvement and analytics", color: "from-purple-50 to-purple-100/50" },
                      { text: "Marketing and promotional offers", color: "from-amber-50 to-amber-100/50" },
                      { text: "Fraud prevention and security", color: "from-red-50 to-red-100/50" },
                      { text: "Personalization and travel experience", color: "from-indigo-50 to-indigo-100/50" },
                      { text: "Legal compliance and obligations", color: "from-gray-50 to-gray-100/50" },
                      { text: "Loyalty programs and rewards", color: "from-cyan-50 to-cyan-100/50" },
                      { text: "Insurance claims processing", color: "from-emerald-50 to-emerald-100/50" }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`bg-gradient-to-br ${item.color} rounded-xl p-5 border border-gray-200/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-700 group-hover:text-gray-900">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 - Information Sharing */}
            <section className="relative">
              <div className="flex items-start gap-6">
                <div className="hidden md:block flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mt-3"></div>
                  </div>
                  
                  <div className="space-y-8 mt-8">
                    {/* Service Providers */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-3 h-8 bg-blue-600 rounded-full"></div>
                        <h3 className="text-xl font-semibold text-gray-800">Service Providers</h3>
                      </div>
                      <p className="text-gray-600 mb-6">We may share your information with trusted third parties who assist us in:</p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          "Processing payments",
                          "Providing tour services",
                          "Customer support",
                          "Marketing and analytics",
                          "Hotel and accommodation providers",
                          "Transportation services"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Legal Requirements */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-3 h-8 bg-amber-600 rounded-full"></div>
                        <h3 className="text-xl font-semibold text-gray-800">Legal Requirements</h3>
                      </div>
                      <p className="text-gray-600 mb-6">We may disclose your information if required by law or to:</p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          "Comply with legal obligations",
                          "Protect our rights and property",
                          "Prevent fraud or abuse",
                          "Ensure user safety",
                          "Respond to government requests",
                          "Enforce our terms of service"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 - Data Security */}
            <section className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-50/50 to-transparent rounded-3xl -z-10"></div>
              <div className="flex items-start gap-6">
                <div className="hidden md:block flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Data Security</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-3"></div>
                  </div>
                  
                  <p className="text-gray-600 mb-8">We implement appropriate security measures to protect your information:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "End-to-end encryption of sensitive data",
                      "PCI-DSS compliant payment processing",
                      "Regular security assessments and testing",
                      "Role-based access control",
                      "Employee security training programs",
                      "24/7 system monitoring",
                      "Backup and disaster recovery planning",
                      "Multi-factor authentication"
                    ].map((item, index) => (
                      <div key={index} className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-green-500/50 hover:shadow-md transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <span className="text-gray-700 group-hover:text-gray-900 font-medium">{item}</span>
                          <div className="w-full h-0.5 bg-green-100 mt-3 group-hover:bg-green-200 transition-colors"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5-10 Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Section 5 */}
              <section className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">5</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Your Rights and Choices</h3>
                </div>
                <p className="text-gray-600">
                  You can manage cookie preferences through your browser settings. For detailed information about our cookie usage, please refer to our Cookie Policy.
                </p>
              </section>

              {/* Section 6 */}
              <section className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-600 font-bold text-lg">6</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cookies and Tracking</h3>
                </div>
                <p className="text-gray-600 mb-3">We use cookies to remember preferences, analyze usage, and improve services.</p>
                <div className="px-4 py-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-amber-700 text-sm font-medium">
                    Manage preferences in browser settings. See our Cookie Policy for details.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">7</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Children's Privacy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our services are not directed to children under 13. We do not knowingly collect personal information from children.
                </p>
                <div className="px-4 py-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-700 text-sm font-medium">
                    For family bookings, children's data must be managed by parents or legal guardians.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">8</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">International Data Transfers</h3>
                </div>
                <p className="text-gray-600 mb-3">Your information may be transferred internationally with safeguards:</p>
                <div className="space-y-2">
                  {["Standard contractual clauses", "Data processing agreements", "Regular security audits", "Encryption during transfer"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9 */}
              <section className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-500/10 flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">9</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Data Retention</h3>
                </div>
                <p className="text-gray-600 mb-3">We retain data as long as necessary for:</p>
                <div className="space-y-2 mb-4">
                  {["Fulfilling policy purposes", "Legal compliance", "Dispute resolution", "Agreement enforcement"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 bg-gray-100 rounded-lg">
                  <p className="text-gray-700 text-sm font-medium">After this period, data is securely deleted or anonymized.</p>
                </div>
              </section>

              {/* Section 10 */}
              <section className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                    <span className="text-indigo-600 font-bold text-lg">10</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Policy Updates</h3>
                </div>
                <p className="text-gray-600 mb-3">We update this policy to reflect:</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {["Practice changes", "New regulations", "Security improvements", "User protection"].map((item, index) => (
                    <div key={index} className="text-center px-3 py-2 bg-indigo-50 rounded-lg">
                      <span className="text-indigo-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  Material changes will be posted on our website with updated dates.
                </p>
              </section>
            </div>

            {/* Section 11 - Contact (Full width) */}
            <section>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full translate-x-32 translate-y-32"></div>
                
                <div className="relative z-10 p-8 md:p-12 text-white">
                  <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm mb-4">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white/90">Contact Us</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch with Our Privacy Team</h2>
                      <p className="text-gray-300 text-lg">
                        If you have questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer:
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {/* Email */}
                      <a 
                        href="mailto:operations@egypttra.com"
                        className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white rounded-xl group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Email</h4>
                            <p className="text-blue-300 group-hover:text-blue-200 transition-colors">
                              operations@egypttra.com
                            </p>
                          </div>
                        </div>
                      </a>

                      {/* Phone */}
                      <a 
                        href="tel:+201011957868"
                        className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white rounded-xl group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Phone</h4>
                            <p className="text-blue-300 group-hover:text-blue-200 transition-colors">
                              +20 101 195 7868
                            </p>
                          </div>
                        </div>
                      </a>

                      {/* Address */}
                      <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white rounded-xl">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Address</h4>
                            <p className="text-gray-300">Cairo, Egypt</p>
                          </div>
                        </div>
                      </div>

                      {/* Response Time */}
                      <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/20">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-white rounded-xl">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Response Time</h4>
                            <div className="flex items-center gap-2">
                              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-400 to-green-400 w-3/4 rounded-full"></div>
                              </div>
                              <span className="text-green-300 font-bold">24-48h</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Urgent Notice */}
                    <div className="bg-gradient-to-r from-amber-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-amber-500 rounded-xl">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Urgent Privacy Concerns</h3>
                          <p className="text-amber-100">
                            For urgent privacy concerns or data breaches, please contact us immediately at our dedicated privacy hotline: 
                            <a href="tel:+201011957868" className="font-bold ml-1 text-white hover:underline">
                              +20 101 195 7868
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}