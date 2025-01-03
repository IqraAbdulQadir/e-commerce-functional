import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
          About EcoElegance
        </h1>
        <p className="text-lg leading-7 mb-6">
          At <span className="font-semibold">EcoElegance</span>, we believe that luxury can be both exquisite and sustainable. Our mission is to bring you meticulously crafted products that not only redefine elegance but also prioritize the well-being of our planet. From ethical sourcing to eco-friendly packaging, every step in our process is guided by our commitment to sustainability.
        </p>
        <p className="text-lg leading-7 mb-6">
          Each item in our collection is a testament to our values: premium quality, timeless design, and responsible craftsmanship. Whether you’re exploring our fashion line, home essentials, or accessories, rest assured that every purchase you make contributes to a greener future.
        </p>
        <p className="text-lg leading-7 mb-6">
          Join us in our journey to redefine luxury—where style meets substance, and sustainability becomes a statement. Together, let’s embrace a world where elegance supports our environment, one conscious choice at a time.
        </p>
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-green-500">Our Vision</h2>
          <p className="mt-4 text-lg">
            To create a seamless harmony between luxury and sustainability, empowering a generation to make choices that reflect care for the planet and the people who inhabit it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
