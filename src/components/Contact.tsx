'use client';

import { ContactFormSchema, ContactFormType } from '@/lib/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './common/Button';
import Container from './common/Container';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300';

  const labelClasses = 'block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2';

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions or special requests? We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We&apos;d love to connect with you! Reach out through any of the methods below or fill out the contact form.
              </p>
            </div>

            {/* Email */}
            <motion.div
              className="flex gap-4"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-rose-600 dark:text-rose-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                <a
                  href="mailto:hello@weddingexample.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  hello@weddingexample.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex gap-4"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                <a
                  href="tel:+15551234567"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex gap-4"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-pink-600 dark:text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Romance City, ST 12345<br />
                  United States
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="pt-8 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {['instagram', 'facebook', 'twitter'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-rose-500 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-semibold">
                      {social.charAt(0).toUpperCase()}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {submitStatus === 'success' && (
              <motion.div
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-green-800 dark:text-green-200 font-semibold">
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-red-800 dark:text-red-200 font-semibold">
                  ✗ Failed to send message. Please try again.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className={labelClasses}>
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className={inputClasses}
                  {...register('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className={labelClasses}>
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={inputClasses}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className={labelClasses}>
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  className={inputClasses}
                  {...register('subject')}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message *
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  {...register('message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  variant="primary"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
