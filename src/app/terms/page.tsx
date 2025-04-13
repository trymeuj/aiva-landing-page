import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Aiva',
  description: 'Aiva\'s Terms of Service: The terms and conditions for using our AI assistant',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-20 bg-[#0056B3] text-white">
          <div className="max-w-[1200px] mx-auto px-[5%]">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl opacity-90 max-w-[700px]">
              Please read these terms carefully before using our AI assistant service.
            </p>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="max-w-[900px] mx-auto px-[5%]">
            <div className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.05)] p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2>Last Updated: July 1, 2023</h2>
                <p>These Terms of Service ("Terms") govern your access to and use of Aiva's website, services, and applications (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not access or use the Service.</p>

                <h2>1. Use of Service</h2>
                <h3>1.1 Eligibility</h3>
                <p>You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this requirement.</p>

                <h3>1.2 Account Registration</h3>
                <p>To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

                <h3>1.3 Account Security</h3>
                <p>You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

                <h2>2. AI Assistant Usage</h2>
                <h3>2.1 Acceptable Use</h3>
                <p>You agree to use our AI assistant only for lawful purposes and in accordance with these Terms. You shall not use the Service to:</p>
                <ul>
                  <li>Violate any applicable law or regulation</li>
                  <li>Infringe the intellectual property rights of others</li>
                  <li>Transmit any material that is harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
                  <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                  <li>Engage in any activity that could disable, overburden, or impair the Service</li>
                  <li>Attempt to gain unauthorized access to the Service or related systems</li>
                </ul>

                <h3>2.2 Service Limitations</h3>
                <p>Our AI assistant has limitations and may not always provide accurate or complete information. You should not rely on the Service for critical decisions without human verification. We are not responsible for any actions you take based on the output of our AI assistant.</p>

                <h2>3. Subscription and Payment</h2>
                <h3>3.1 Fees</h3>
                <p>Some aspects of the Service may be offered on a subscription basis. You agree to pay all fees in accordance with the pricing and payment terms presented to you for the subscription plan you select.</p>

                <h3>3.2 Billing</h3>
                <p>By providing a payment method, you authorize us to charge you on a recurring basis until you cancel your subscription. If your payment cannot be completed, we may suspend or terminate your access to the Service.</p>

                <h3>3.3 Cancellation</h3>
                <p>You may cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to the Service until the end of your current billing period.</p>

                <h2>4. Intellectual Property</h2>
                <h3>4.1 Our Intellectual Property</h3>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Aiva and its licensors. The Service is protected by copyright, trademark, and other laws.</p>

                <h3>4.2 User Content</h3>
                <p>You retain ownership of any content you submit through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content in connection with providing and improving the Service.</p>

                <h2>5. Limitation of Liability</h2>
                <p>In no event shall Aiva, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                <h2>6. Indemnification</h2>
                <p>You agree to defend, indemnify, and hold harmless Aiva and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of and access to the Service.</p>

                <h2>7. Termination</h2>
                <p>We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.</p>

                <h2>8. Changes to Terms</h2>
                <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                <h2>9. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>

                <h2>10. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p>Email: legal@aiva.ai</p>
                <p>Address: 123 AI Avenue, Tech City, CA 94000</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 