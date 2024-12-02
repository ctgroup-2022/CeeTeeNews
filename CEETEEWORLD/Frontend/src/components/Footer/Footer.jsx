import React, { useState } from "react";

const Footer = () => {
  const [isAboutOpen, setAboutOpen] = useState(true);
  const [isLinksOpen, setLinksOpen] = useState(true);
  const [isContactOpen, setContactOpen] = useState(true);

  const toggleSection = (section) => {
    if (section === "about") setAboutOpen(!isAboutOpen);
    if (section === "links") setLinksOpen(!isLinksOpen);
    if (section === "contact") setContactOpen(!isContactOpen);
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-5">
        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={() => toggleSection("about")}
            >
              <h2 className="text-xl font-semibold mb-2 md:mb-4">About Cee Tee World News</h2>
              <span className="md:hidden">
                {isAboutOpen ? "-" : "+"}
              </span>
            </div>
            <div
              className={`transition-all duration-300 ${
                isAboutOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
              } md:max-h-screen`}
            >
              <p>
                Cee Tee World News is the official news website of the CT Group of Institutions,
                delivering the latest updates, events, and stories from our vibrant community.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={() => toggleSection("links")}
            >
              <h2 className="text-xl font-semibold mb-2 md:mb-4">Quick Links</h2>
              <span className="md:hidden">
                {isLinksOpen ? "-" : "+"}
              </span>
            </div>
            <ul
              className={`space-y-2 transition-all duration-300 ${
                isLinksOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
              } md:max-h-screen`}
            >
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={() => toggleSection("contact")}
            >
              <h2 className="text-xl font-semibold mb-2 md:mb-4">Contact Information</h2>
              <span className="md:hidden">
                {isContactOpen ? "-" : "+"}
              </span>
            </div>
            <ul
              className={`space-y-2 transition-all duration-300 ${
                isContactOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
              } md:max-h-screen`}
            >
              <li>📍 Main Campus, CT Group of Institutions, Punjab</li>
              <li>
                📧{" "}
                <a
                  href="mailto:info@ceeteeworldnews.com"
                  className="hover:text-blue-400 transition"
                >
                  info@ceeteeworldnews.com
                </a>
              </li>
              <li>
                📞{" "}
                <a
                  href="tel:+911234567890"
                  className="hover:text-blue-400 transition"
                >
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          {/* Social Media */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition transform hover:scale-110"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition transform hover:scale-110"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Cee Tee World News. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
