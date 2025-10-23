"use client";

import Container from "./common/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
  ];

  const socialLinks = [
    { name: "Facebook", url: "#", icon: "👍" },
    { name: "Instagram", url: "#", icon: "📷" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "Pinterest", url: "#", icon: "📌" },
  ];

  return (
    <footer className="bg-wedding-dark text-white mt-10 sm:mt-16 md:mt-20">
      <Container className="py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-wedding-gold mb-2">
              💍 Our Wedding
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Celebrating our love story and creating unforgettable memories
              with our loved ones.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-wedding-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  title={social.name}
                  aria-label={social.name}
                  className="text-xl sm:text-2xl hover:text-wedding-gold transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-6 sm:pt-8">
          <p className="text-center text-sm sm:text-base text-gray-300">
            &copy; {currentYear} Our Wedding. All rights reserved. Made with
            love.
          </p>
        </div>
      </Container>
    </footer>
  );
}
