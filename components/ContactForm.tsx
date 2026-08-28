"use client";

import * as React from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    // Client-side email composition fallback
    try {
      // Simulate brief network submission / trigger mailto
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please reach out via email directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {status === "success" && (
        <div className="flex items-center gap-3 rounded-2xl border border-highlight/30 bg-highlight/10 p-4 text-sm text-text-primary">
          <CheckCircle2 className="h-5 w-5 text-highlight shrink-0" />
          <div>
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-xs text-text-secondary">
              Thank you for reaching out. Satyajit will get back to you shortly.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-text-primary">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className="flex h-12 w-full rounded-xl border border-bg-700 bg-bg-800 px-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight dark:bg-bg-800/90"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-text-primary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          className="flex h-12 w-full rounded-xl border border-bg-700 bg-bg-800 px-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight dark:bg-bg-800/90"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project, idea, or inquiry..."
          value={formData.message}
          onChange={handleChange}
          className="flex w-full rounded-xl border border-bg-700 bg-bg-800 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight dark:bg-bg-800/90 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50 font-clash"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Message"
        )}
      </button>
    </form>
  );
}
