"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaTelegramPlane, FaWhatsapp, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "@/lib/motion";

const CONTACT_EMAIL = "uferekalu.dev@gmail.com";

const contactOptions = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+2348130149426",
    href: "tel:+2348130149426",
  },
  {
    icon: FaTelegramPlane,
    label: "Telegram",
    value: "@IntelligentProgrammer",
    href: "https://t.me/IntelligentProgrammer",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+2348130149426",
    href: "https://wa.me/+2348130149426",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Section id="contact" background="brand">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project idea or need a developer for collaboration? Reach out and let's make something impactful together."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Methods */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {contactOptions.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition-all rounded-[var(--radius-lg)] p-5 backdrop-blur-md border border-black/10 dark:border-white/15 group"
              >
                <Icon className="w-8 h-8 text-brand-600 dark:text-brand-300 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-foreground text-lg font-medium">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Card elevated className="p-6 sm:p-8 bg-surface-elevated">
              <h3 className="text-2xl font-bold mb-5 text-center text-foreground">
                Send a Message
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 flex items-center gap-2 rounded-[var(--radius-md)] bg-brand-500/10 border border-brand-500/20 px-4 py-3 text-sm text-brand-600 dark:text-brand-300"
                >
                  <FaCheckCircle className="shrink-0" />
                  Opening your email client with the message ready to send.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full justify-center">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
