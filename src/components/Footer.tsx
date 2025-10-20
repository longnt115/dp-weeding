'use client';

import Container from './common/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Events', href: '#events' },
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: '👍' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Pinterest', url: '#', icon: '📌' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-20">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">💍 Our Wedding</h3>
            <p className="text-gray-400">
              Celebrating our love story and creating unforgettable memories with our loved ones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  title={social.name}
                  className="text-2xl hover:text-amber-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Our Wedding. All rights reserved. Made with love.
          </p>
        </div>
      </Container>
    </footer>
  );
}
