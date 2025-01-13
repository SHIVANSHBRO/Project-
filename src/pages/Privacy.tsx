import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-amber-50 min-h-screen py-12"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-serif font-bold mb-8 text-amber-900">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-gray-700">
            <p className="mb-4">
              Oriental Furnishing Works ("we," "our," or "us") is committed to protecting the privacy 
              and security of our customers and users. This Privacy Policy outlines how we collect, 
              use, disclose, and safeguard your information when you interact with our services, 
              including bulk messaging through the WhatsApp Cloud API. You agree to the practices 
              described in this policy by using our services.
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-amber-900">
                1. Information We Collect
              </h2>
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Personal Information: Name, phone number, email address, and other contact details provided by you.</li>
                <li>Usage Data: Information about your interactions with our services, such as message history and preferences.</li>
                <li>Device Information: Details about the device used to access our services, including IP address, browser type, and operating system.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-amber-900">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide and manage our services, including bulk WhatsApp messaging.</li>
                <li>Communicate with you about your inquiries, orders, or updates.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Comply with legal obligations and resolve disputes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-amber-900">
                3. Sharing of Information
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. 
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Service Providers: Trusted third parties that assist in operating our services, such as WhatsApp Cloud API providers.</li>
                <li>Legal Authorities: When required to comply with legal obligations or protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-amber-900">
                4. Data Security
              </h2>
              <p>
                We implement reasonable technical and organizational measures to protect your personal 
                information from unauthorized access, alteration, disclosure, or destruction. However, 
                no system can guarantee complete security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-amber-900">
                5. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access and update your personal information.</li>
                <li>Request the deletion of your data.</li>
                <li>Opt-out of non-essential communications.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-amber-900">
                6. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of significant changes 
                by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-amber-900">
                7. Contact Us
              </h2>
              <p>
                For questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-2">
                <p>Oriental Furnishing Works</p>
                <p>Email: Orientalfurnishingworks@gmail.com</p>
                <p>Phone: +919634104789</p>
              </div>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;