import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-amber-100">
              Oriental Furnishing Works specializes in crafting premium vintage wooden furniture,
              bringing elegance and tradition to your living spaces.
            </p>
            <p className="text-amber-100">GSTIN: 09APOPK8323D2ZP</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-amber-200 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-amber-200 transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-amber-200 transition-colors">Contact</Link></li>
              <li>
                <Link to="/privacy" target="_blank" className="hover:text-amber-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+919634104789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>orientalfurnishingworks@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Near Seema PS Multiplex Nai Basti Aligarh</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-amber-100">Subscribe to receive updates and special offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded bg-amber-800 text-amber-50 placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-700 hover:bg-amber-600 transition-colors rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-200">
              © {new Date().getFullYear()} Oriental Furnishing Works. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;