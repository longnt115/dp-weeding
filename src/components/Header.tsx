'use client';

import { scrollToSection } from '@/lib/utils';
import { useState } from 'react';
import Button from './common/Button';
import Container from './common/Container';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-amber-600">💍 Our Wedding</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop RSVP Button */}
        <div className="hidden md:block">
          <Button onClick={() => handleNavClick('#rsvp')} size="sm">
            RSVP
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-amber-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <Container className="py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 py-2">
              <Button onClick={() => handleNavClick('#rsvp')} className="w-full">
                RSVP Now
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
