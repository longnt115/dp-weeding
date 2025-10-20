'use client';

import { RSVPFormSchema, RSVPFormType } from '@/lib/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './common/Button';
import Container from './common/Container';

export default function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormType>({
    resolver: zodResolver(RSVPFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      numberOfGuests: 1,
      attendance: 'yes',
      dietaryPreferences: '',
      comments: '',
    },
  });

  const onSubmit = async (data: RSVPFormType) => {
    setIsSubmitting(true);
    try {
      // Call API endpoint for form submission
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit RSVP');
      }

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('RSVP submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300';

  const labelClasses = 'block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2';

  return (
    <section id="rsvp" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            RSVP
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Please let us know if you can celebrate with us by filling out the form below
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {submitStatus === 'success' && (
            <motion.div
              className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-green-800 dark:text-green-200 font-semibold">
                ✓ Thank you! Your RSVP has been received. We look forward to celebrating with you!
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
                ✗ Something went wrong. Please try again.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
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
              <label htmlFor="email" className={labelClasses}>
                Email Address *
              </label>
              <input
                id="email"
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

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className={inputClasses}
                {...register('phone')}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Grid Layout for Attendance and Guests */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Attendance Dropdown */}
              <div>
                <label htmlFor="attendance" className={labelClasses}>
                  Can you attend? *
                </label>
                <select
                  id="attendance"
                  className={inputClasses}
                  {...register('attendance')}
                >
                  <option value="yes">Yes, I&apos;ll be there!</option>
                  <option value="no">No, I can&apos;t make it</option>
                  <option value="maybe">Maybe, I&apos;ll let you know</option>
                </select>
                {errors.attendance && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.attendance.message}
                  </p>
                )}
              </div>

              {/* Number of Guests Field */}
              <div>
                <label htmlFor="numberOfGuests" className={labelClasses}>
                  Number of Guests *
                </label>
                <input
                  id="numberOfGuests"
                  type="number"
                  min="1"
                  max="10"
                  className={inputClasses}
                  {...register('numberOfGuests', { valueAsNumber: true })}
                />
                {errors.numberOfGuests && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                    {errors.numberOfGuests.message}
                  </p>
                )}
              </div>
            </div>

            {/* Dietary Preferences Field */}
            <div>
              <label htmlFor="dietaryPreferences" className={labelClasses}>
                Dietary Preferences
              </label>
              <input
                id="dietaryPreferences"
                type="text"
                placeholder="e.g., Vegetarian, Gluten-free, etc."
                className={inputClasses}
                {...register('dietaryPreferences')}
              />
              {errors.dietaryPreferences && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                  {errors.dietaryPreferences.message}
                </p>
              )}
            </div>

            {/* Comments Field */}
            <div>
              <label htmlFor="comments" className={labelClasses}>
                Additional Comments
              </label>
              <textarea
                id="comments"
                placeholder="Any special requests or messages for us?"
                rows={4}
                className={`${inputClasses} resize-none`}
                {...register('comments')}
              />
              {errors.comments && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                  {errors.comments.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
