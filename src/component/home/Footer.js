import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#0b3558',
        color: 'white'
      }}
      className="text-white py-10 px-4 w-full"
    >
      <div className="container mx-auto">
        {/* Call to Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Start Your 3 Day Free Trial</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex space-x-4">
            <button style={{ background: '#174981' }} className="hover:bg-[#123456] text-white py-2 px-4 rounded">Ask Now</button>
            <button style={{ background: '#174981' }} className="hover:bg-[#123456] text-white py-2 px-4 rounded">Ask Now</button>
          </div>
        </div>
        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Leadership</li>
              <li>Pricing</li>
              <li>Newsroom</li>
              <li>Corporate Social</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li>Customer Engagement</li>
              <li>Product Experience</li>
              <li>Email</li>
              <li>AMP Email</li>
              <li>Customer Data Platform</li>
              <li>Personalization</li>
              <li>Netcore Generative AI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">INDUSTRIES</h3>
            <ul className="space-y-2">
              <li>Ecommerce & Retail</li>
              <li>Media and Entertainment</li>
              <li>Travel and Hospitality</li>
              <li>Edtech</li>
              <li>Fantasy Gaming</li>
              <li>Business & Financial</li>
              <li>Startup</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">GET SUPPORT</h3>
            <ul className="space-y-2">
              <li>Documentation</li>
              <li>Email API Tutorial</li>
              <li>Raise A Ticket</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Success Stories</li>
              <li>Ebooks</li>
              <li>Events</li>
              <li>Podcasts</li>
              <li>Webinars</li>
              <li>Videos</li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">Biz Pro</div>
          <div className="flex space-x-4">
            <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaFacebook className="text-[#0b3558] w-4 h-4" />
            </span>
            <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaTwitter className="text-[#0b3558] w-4 h-4" />
            </span>
            <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaInstagram className="text-[#0b3558] w-4 h-4" />
            </span>
            <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaLinkedin className="text-[#0b3558] w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
