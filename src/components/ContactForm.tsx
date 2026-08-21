"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { smsHref } from "@/lib/contact";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const priorityServiceNames = ["Weekly Pool Cleaning", "Pool Closing", "Pool Opening"];

const serviceOptions = [
  ...priorityServiceNames,
  "Season Pass / whole-season service",
  "Green-to-clean rescue",
  ...siteConfig.services
    .map((service) => service.name)
    .filter((name) => !priorityServiceNames.includes(name)),
  "Not sure yet",
];

const poolTypeOptions = [
  "In-ground pool",
  "Above-ground pool",
  "Not sure",
];

const timingOptions = [
  "This week",
  "Next 2 weeks",
  "This month",
  "Ongoing weekly service",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      town: String(formData.get("town") || "").trim(),
      poolType: String(formData.get("poolType") || "").trim(),
      timing: String(formData.get("timing") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        window.fbq?.("track", "Lead", {
          content_name: "PCD contact form",
          service: data.service,
        });
        window.dataLayer?.push({
          event: "lead_submit",
          form_name: "contact_form",
          service: data.service,
          timing: data.timing,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <h3 className="text-lg font-semibold text-green-900 mb-2">
          Got It
        </h3>
        <p className="text-sm text-green-700">
          We&apos;ll text or call you today if you&apos;re in our route. If
          it&apos;s urgent, text us directly.
        </p>
        <a
          href={smsHref()}
          className="mt-4 inline-block text-sm font-medium text-green-700 underline"
        >
          Text {siteConfig.phoneFormatted}
        </a>
        <button
          onClick={() => setStatus("idle")}
          className="mt-3 block mx-auto text-sm font-medium text-green-700 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
          placeholder="(000) 000-0000"
        />
      </div>
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          What do you need? <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
        >
          <option value="">Skip for now</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="town"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Town / neighborhood <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            type="text"
            id="town"
            name="town"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
            placeholder="Wayne, Hockessin, etc."
          />
        </div>
        <div>
          <label
            htmlFor="timing"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Timing <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <select
            id="timing"
            name="timing"
            defaultValue=""
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
          >
            <option value="">Skip for now</option>
            {timingOptions.map((timing) => (
              <option key={timing} value={timing}>
                {timing}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="poolType"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Pool type <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <select
          id="poolType"
          name="poolType"
          defaultValue=""
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
        >
          <option value="">Skip for now</option>
          {poolTypeOptions.map((poolType) => (
            <option key={poolType} value={poolType}>
              {poolType}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          How can we help? <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none resize-y"
          placeholder="Pool size, green/cloudy water, equipment issue, gate notes, or anything else we should know."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Get My Pool Handled"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-600 text-center">
          Something went wrong. Text us at {siteConfig.phoneFormatted} instead.
        </p>
      )}
      <p className="text-xs text-gray-500 text-center">
        Name and phone is enough. Text is fastest. No contracts.
      </p>
    </form>
  );
}
