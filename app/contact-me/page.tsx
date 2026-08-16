"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fieldClass =
  "w-full rounded-[10px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)] transition-colors duration-200 focus:border-[var(--ink)]/25 focus:outline-none";

const labelClass =
  "ml-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      contactSchema.parse(formData);
      setStatus("loading");

      const response = await fetch("/api/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const data = await response.json();
      if (data.message === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      setStatus("error");
      if (error instanceof z.ZodError) {
        setErrorMessage(error.errors[0].message);
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="mx-auto flex w-full max-w-5xl flex-col items-start gap-12 pt-28 pb-20 lg:flex-row lg:gap-24 md:pt-32 md:pb-24"
    >
      <motion.div
        variants={pageVariants}
        className="flex w-full flex-1 flex-col gap-8 top-24 lg:sticky"
      >
        <div>
          <h1 className="mb-6 text-[1.75rem] font-semibold tracking-[-0.03em] leading-[1.2] text-[var(--ink)] md:text-[2.15rem]">
            Let&apos;s talk.
          </h1>
          <div className="max-w-md space-y-5 text-[1.0025rem] font-normal leading-relaxed text-[var(--ink-secondary)]">
            <p>
              I&apos;m open to frontend engineering, AI product, and Technical Writing opportunities.
            </p>
            <p>
              Have a project, role, or idea in mind?
              <br />
              Send me a note.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <a
            href="mailto:katare27451@gmail.com"
            className="group flex w-full items-center gap-5 rounded-[1.25rem] border border-[var(--line)] bg-white p-5 transition-colors duration-300 hover:border-[var(--ink)]/15 hover:bg-[#f4f4f1] sm:w-fit"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] text-[var(--ink-muted)] transition-colors duration-300 group-hover:text-[var(--ink)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
              </svg>
            </div>
            <div className="flex flex-col gap-0.5 pr-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Email Me
              </span>
              <span className="font-medium tracking-tight text-[var(--ink)]">
                katare27451@gmail.com
              </span>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full flex-[1.2]">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col gap-5 overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className={labelClass}>
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className={fieldClass}
            />
          </div>

          <div className="mb-2 flex flex-col gap-2">
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="A short note about the role or project."
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="min-h-[2.5rem]">
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[10px] border border-[#c45c3a]/25 bg-[#c45c3a]/10 px-4 py-3 text-xs font-medium text-[#9a3f24]"
              >
                {errorMessage}
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[10px] border border-[#3d6b45]/25 bg-[#3d6b45]/10 px-4 py-3 text-xs font-medium text-[#2f5a36]"
              >
                Message sent. I&apos;ll get back to you shortly.
              </motion.div>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-1 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[var(--ink)] px-6 py-4 text-sm font-medium text-[var(--paper)] transition-colors duration-200 hover:bg-[#2c2c28] focus:outline-none focus:ring-2 focus:ring-[var(--ink)]/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--paper)]/25 border-t-[var(--paper)]" />
            ) : (
              <>
                <span>Send Message</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33333 8H12.6667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3.33334L12.6667 8L8 12.6667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
