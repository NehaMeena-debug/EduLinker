import React from "react";

const Footer = () => {
  return (
    <>
    <footer id='RemoveScrlbr' className="bg-gray-900 text-white py-10 mt-3">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1st section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Edulinker</h2>
          <p className="text-gray-400">
            Connecting buyers and sellers of educational materials. Empowering
            learners with knowledge.
          </p>
        </div>

        {/* second Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* third Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Edulinker. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
