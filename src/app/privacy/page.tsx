import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Aiva',
  description: 'Aiva\'s Privacy Policy: How we handle and protect your personal data',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-20 bg-[#0056B3] text-white">
          <div className="max-w-[1200px] mx-auto px-[5%]">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl opacity-90 max-w-[700px]">
              We're committed to protecting your privacy and being transparent about how we use your data.
            </p>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="max-w-[900px] mx-auto px-[5%]">
            <div className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.05)] p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2>Last Updated: April 1, 2025</h2>
                <p>At Aiva, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI assistant service. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our service.</p>

                <h2>Information We Collect</h2>
                <p>We collect information that you provide directly to us when you:</p>
                <ul>
                  <li>Register for an account</li>
                  <li>Use our AI assistant service</li>
                  <li>Contact customer support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>

                <p>This information may include:</p>
                <ul>
                  <li>Name, email address, and other contact information</li>
                  <li>Login credentials</li>
                  <li>Payment information (processed securely through our payment providers)</li>
                  <li>Content of conversations with our AI assistant</li>
                  <li>Information about tasks you ask our AI to perform</li>
                  <li>Information from third-party services you connect to our platform</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Train and enhance our AI models</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Personalize your experience</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                </ul>

                <h2>Sharing of Information</h2>
                <p>We may share your personal information with:</p>
                <ul>
                  <li>Service providers who perform services on our behalf</li>
                  <li>Third-party applications you choose to connect with our service</li>
                  <li>Professional advisors, such as lawyers, auditors, and insurers</li>
                  <li>Government bodies when required by law</li>
                  <li>Third parties in connection with a business transfer (e.g., merger or acquisition)</li>
                </ul>

                <h2>Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.</p>

                <h2>Your Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul>
                  <li>Access to your personal data</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your data</li>
                  <li>Restriction or objection to certain processing activities</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>

                <h2>Children's Privacy</h2>
                <p>Our service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.</p>

                <h2>Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

                {/* <h2>Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at:</p>
                <p>Email: privacy@aiva.ai</p>
                <p>Address: 123 AI Avenue, Tech City, CA 94000</p> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 