"use client";
import {
  ContactFormSchema,
  ContactFormType,
  RSVPFormSchema,
  RSVPFormType,
} from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./common/Button";
import Container from "./common/Container";

export default function RSVPForm() {
  const [rsvpStatus, setRsvpStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [wishesStatus, setWishesStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isRsvpSubmitting, setIsRsvpSubmitting] = useState(false);
  const [isWishesSubmitting, setIsWishesSubmitting] = useState(false);

  // RSVP Form
  const {
    register: registerRsvp,
    handleSubmit: handleSubmitRsvp,
    formState: { errors: rsvpErrors },
    reset: resetRsvp,
  } = useForm<RSVPFormType>({
    resolver: zodResolver(RSVPFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      numberOfGuests: 1,
      attendance: "yes",
      dietaryPreferences: "",
      comments: "",
    },
  });

  // Wishes Form (Contact)
  const {
    register: registerWishes,
    handleSubmit: handleSubmitWishes,
    formState: { errors: wishesErrors },
    reset: resetWishes,
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onRsvpSubmit = async (data: RSVPFormType) => {
    setIsRsvpSubmitting(true);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit RSVP");
      setRsvpStatus("success");
      resetRsvp();
      setTimeout(() => setRsvpStatus("idle"), 5000);
    } catch (error) {
      console.error("RSVP submission error:", error);
      setRsvpStatus("error");
      setTimeout(() => setRsvpStatus("idle"), 5000);
    } finally {
      setIsRsvpSubmitting(false);
    }
  };

  const onWishesSubmit = async (data: ContactFormType) => {
    setIsWishesSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setWishesStatus("success");
      resetWishes();
      setTimeout(() => setWishesStatus("idle"), 5000);
    } catch (error) {
      console.error("Wishes submission error:", error);
      setWishesStatus("error");
      setTimeout(() => setWishesStatus("idle"), 5000);
    } finally {
      setIsWishesSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-wedding-border bg-white text-wedding-dark focus:outline-none focus:ring-2 focus:ring-wedding-gold transition-all duration-300";
  const labelClasses =
    "block text-xs sm:text-sm font-semibold text-wedding-dark mb-1.5 sm:mb-2";

  return (
    <section
      id="rsvp"
      className="py-10 sm:py-16 md:py-20 bg-linear-to-br from-wedding-light to-white px-4 sm:px-6"
    >
      <Container>
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-wedding-dark">
            RSVP & Wishes
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-linear-to-r from-wedding-gold to-[#c9a961] mx-auto mb-3 sm:mb-4" />
          <p className="text-base sm:text-lg text-wedding-secondary max-w-2xl mx-auto px-4">
            Confirm your attendance and share your wishes with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* RSVP Form - Left Side */}
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 border border-wedding-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-wedding-dark mb-2 sm:mb-3 text-center">
              RSVP
            </h3>
            <p className="text-center text-wedding-secondary mb-4 sm:mb-6 text-xs sm:text-sm px-2">
              Please kindly help us prepare everything better by confirming your
              attendance to our wedding event with the following RSVP form:
            </p>

            {rsvpStatus === "success" && (
              <motion.div
                className="mb-6 p-4 bg-wedding-success-light border border-wedding-success rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-wedding-success font-semibold text-sm">
                  ✓ Thank you! Your RSVP has been received.
                </p>
              </motion.div>
            )}
            {rsvpStatus === "error" && (
              <motion.div
                className="mb-6 p-4 bg-wedding-error-light border border-wedding-error rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-wedding-error font-semibold text-sm">
                  ✗ Something went wrong. Please try again.
                </p>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmitRsvp(onRsvpSubmit)}
              className="space-y-4"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="rsvp-name" className={labelClasses}>
                  Your Name
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  placeholder="Your Name"
                  className={inputClasses}
                  {...registerRsvp("name")}
                />
                {rsvpErrors.name && (
                  <p className="mt-1 text-xs text-wedding-error">
                    {rsvpErrors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="rsvp-email" className={labelClasses}>
                  Your Email
                </label>
                <input
                  id="rsvp-email"
                  type="email"
                  placeholder="Your Email"
                  className={inputClasses}
                  {...registerRsvp("email")}
                />
                {rsvpErrors.email && (
                  <p className="mt-1 text-xs text-wedding-error">
                    {rsvpErrors.email.message}
                  </p>
                )}
              </div>

              {/* Attendance Dropdown */}
              <div>
                <label htmlFor="attendance" className={labelClasses}>
                  All Event
                </label>
                <select
                  id="attendance"
                  className={inputClasses}
                  {...registerRsvp("attendance")}
                >
                  <option value="yes">Yes, I&apos;ll be there!</option>
                  <option value="no">No, I can&apos;t make it</option>
                  <option value="maybe">Maybe, I&apos;ll let you know</option>
                </select>
                {rsvpErrors.attendance && (
                  <p className="mt-1 text-xs text-wedding-error">
                    {rsvpErrors.attendance.message}
                  </p>
                )}
              </div>

              {/* Number of Guests Field */}
              <div>
                <label htmlFor="numberOfGuests" className={labelClasses}>
                  Guest
                </label>
                <input
                  id="numberOfGuests"
                  type="number"
                  min="1"
                  max="10"
                  className={inputClasses}
                  {...registerRsvp("numberOfGuests", { valueAsNumber: true })}
                />
                {rsvpErrors.numberOfGuests && (
                  <p className="mt-1 text-xs text-wedding-error">
                    {rsvpErrors.numberOfGuests.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-2"
              >
                <Button
                  type="submit"
                  disabled={isRsvpSubmitting}
                  className="w-full text-sm sm:text-base py-2.5 sm:py-3"
                  size="sm"
                >
                  {isRsvpSubmitting ? "Submitting..." : "I'm Attending"}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Wishes Form - Right Side */}
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 border border-wedding-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-wedding-dark mb-2 sm:mb-3 text-center">
              Wishes
            </h3>
            <p className="text-center text-wedding-secondary mb-4 sm:mb-6 text-xs sm:text-sm px-2">
              Leave Us A Note
              <br />
              <span className="text-xs">
                write your special wishes we love to hear from all of you
              </span>
            </p>

            {wishesStatus === "success" && (
              <motion.div
                className="mb-6 p-4 bg-wedding-success-light border border-wedding-success rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-wedding-success font-semibold text-sm">
                  ✓ Thank you for your wishes!
                </p>
              </motion.div>
            )}
            {wishesStatus === "error" && (
              <motion.div
                className="mb-6 p-4 bg-wedding-error-light border border-wedding-error rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-wedding-error font-semibold text-sm">
                  ✗ Failed to send message. Please try again.
                </p>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmitWishes(onWishesSubmit)}
              className="space-y-4"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="wishes-name" className={labelClasses}>
                  Name:
                </label>
                <input
                  id="wishes-name"
                  type="text"
                  placeholder="Natalia:"
                  className={inputClasses}
                  {...registerWishes("name")}
                />
                {wishesErrors.name && (
                  <p className="mt-1 text-xs text-wedding-error">
                    {wishesErrors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="wishes-email" className={labelClasses}>
                  Email:
                </label>
                <input
                  id="wishes-email"
                  type="email"
                  placeholder="Your Email"
                  className={inputClasses}
                  {...registerWishes("email")}
                />
                {wishesErrors.email && (
                  <p className="mt-1 text-xs text-wedding-error">
                    {wishesErrors.email.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="wishes-message" className={labelClasses}>
                  Message:
                </label>
                <textarea
                  id="wishes-message"
                  placeholder="Share your special wishes..."
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  {...registerWishes("message")}
                />
                {wishesErrors.message && (
                  <p className="mt-1 text-xs text-wedding-error">
                    {wishesErrors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-2"
              >
                <Button
                  type="submit"
                  disabled={isWishesSubmitting}
                  className="w-full"
                  size="sm"
                >
                  {isWishesSubmitting ? "Sending..." : "Send"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
