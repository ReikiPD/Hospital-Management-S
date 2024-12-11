import React from 'react';

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 py-10 px-6">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-primary mb-4">About Our Hospital Management System</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to our advanced Hospital Management System (HMS), a comprehensive solution designed to streamline
          hospital operations, improve patient care, and enhance overall efficiency. Our system integrates cutting-edge
          technology to ensure seamless management of appointments, patient records, doctor schedules, billing, and
          much more.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
          <li>Efficient appointment scheduling with real-time doctor availability.</li>
          <li>Secure patient data management.</li>
          <li>Comprehensive billing and invoicing system.</li>
          <li>Interactive dashboards for monitoring hospital performance.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our mission is to empower healthcare institutions with tools that enable them to provide better services,
          reduce administrative burden, and optimize patient outcomes. With our HMS, we aim to bridge the gap between
          technology and healthcare, creating a more efficient and patient-centric environment.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-6 mb-2">Why Choose Us?</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We understand the unique challenges faced by healthcare providers. Our solution is built with scalability,
          security, and user-friendliness in mind, ensuring it caters to hospitals of all sizes. With continuous updates
          and dedicated support, we are committed to delivering the best experience for our clients.
        </p>

        <p className="text-center text-gray-500 text-sm mt-8">
          For inquiries or more information, feel free to contact us. Together, let's revolutionize healthcare management!
        </p>
      </div>
    </div>
  );
};

export default About;