import { z } from 'zod';

export const RSVPFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 characters'),
  numberOfGuests: z.number().int().min(1, 'At least 1 guest required').max(10, 'Maximum 10 guests'),
  attendance: z.enum(['yes', 'no', 'maybe']),
  dietaryPreferences: z.string().optional(),
  comments: z.string().optional(),
});

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export type RSVPFormType = z.infer<typeof RSVPFormSchema>;
export type ContactFormType = z.infer<typeof ContactFormSchema>;
