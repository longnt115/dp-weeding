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
    "w-full px-4 py-3 rounded-lg border border-[#e0e0e0] bg-white text-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all duration-300";
  const labelClasses = "block text-sm font-semibold text-[#3a3a3a] mb-2";

  return (
    <section
      id="rsvp"
      className="py-20 bg-gradient-to-br from-[#f5f5f5] to-white"
    >
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#3a3a3a]">
            RSVP & Wishes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-[#c9a961] mx-auto mb-4" />
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Confirm your attendance and share your wishes with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* RSVP Form - Left Side */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-[#e0e0e0]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#3a3a3a] mb-3 text-center">
              RSVP
            </h3>
            <p className="text-center text-[#666666] mb-6 text-sm">
              Please kindly help us prepare everything better by confirming your
              attendance to our wedding event with the following RSVP form:
            </p>

            {rsvpStatus === "success" && (
              <motion.div
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-green-800 font-semibold text-sm">
                  ✓ Thank you! Your RSVP has been received.
                </p>
              </motion.div>
            )}
            {rsvpStatus === "error" && (
              <motion.div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-red-800 font-semibold text-sm">
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
                  <p className="mt-1 text-xs text-red-500 ">
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
                  <p className="mt-1 text-xs text-red-500 ">
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
                  <p className="mt-1 text-xs text-red-500 ">
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
                  <p className="mt-1 text-xs text-red-500 ">
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
                  className="w-full"
                  size="sm"
                >
                  {isRsvpSubmitting ? "Submitting..." : "I'm Attending"}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Wishes Form - Right Side */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-[#e0e0e0]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#3a3a3a] mb-3 text-center">
              Wishes
            </h3>
            <p className="text-center text-[#666666] mb-6 text-sm">
              Leave Us A Note
              <br />
              <span className="text-xs">
                write your special wishes we love to hear from all of you
              </span>
            </p>

            {wishesStatus === "success" && (
              <motion.div
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-green-800 font-semibold text-sm">
                  ✓ Thank you for your wishes!
                </p>
              </motion.div>
            )}
            {wishesStatus === "error" && (
              <motion.div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-red-800 font-semibold text-sm">
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
                  <p className="mt-1 text-xs text-red-500 ">
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
                  <p className="mt-1 text-xs text-red-500 ">
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
                  <p className="mt-1 text-xs text-red-500 ">
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
