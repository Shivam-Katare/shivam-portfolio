"use client";

import React, { useState } from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>Contact - Shivam Katare</title>
        <meta
          name="description"
          content="Get in touch with Shivam Katare for freelance or full-time opportunities."
        />
      </Head>

      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="mx-auto flex w-full max-w-5xl flex-col lg:flex-row gap-12 lg:gap-24 items-start mt-12 md:mt-24 px-4 sm:px-6 mb-24"
      >
        {/* Text & Info Column */}
        <motion.div
          variants={pageVariants}
          className="flex-1 flex flex-col gap-8 w-full top-24 lg:sticky"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Let's connect.
            </h1>
            <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-md">
              Open for{" "}
              <strong className="text-zinc-200 font-medium">
                full-time Frontend opportunities,
              </strong>{" "}
              freelance collaborations,and technical writing. Drop a message or
              reach out directly.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <a
              href="mailto:katare27451@gmail.com"
              className="group flex items-center gap-5 p-5 rounded-[1.5rem] bg-[#303030] border border-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 w-full sm:w-fit"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors duration-300">
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
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  Email Me
                </span>
                <span className="text-zinc-200 font-medium tracking-tight group-hover:text-white transition-colors">
                  katare27451@gmail.com
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div variants={itemVariants} className="flex-[1.2] w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-6 sm:p-8 rounded-[2.5rem] bg-[#303030] border border-white/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-black border border-white/5 rounded-2xl px-4 py-3.5 text-zinc-200 text-sm placeholder:text-zinc-600 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-black border border-white/5 rounded-2xl px-4 py-3.5 text-zinc-200 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:black transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-1"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full bg-black border border-white/5 rounded-2xl px-4 py-3.5 text-zinc-200 text-sm placeholder:text-zinc-600 focus:outline-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <label
                htmlFor="message"
                className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-black border border-white/5 rounded-2xl px-4 py-3.5 text-zinc-200 text-sm placeholder:text-zinc-600 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            <div className="min-h-[2.5rem]">
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-medium"
                >
                  {errorMessage}
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium"
                >
                  Message sent successfully! I'll get back to you shortly.
                </motion.div>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-1 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#080808] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "loading" ? (
                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
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
    </>
  );
}
