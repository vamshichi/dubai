"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const RegistrationForm = () => {
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter(); // Initialize the router
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  // Countdown Timer for Event Date
  useEffect(() => {
    const eventDate = new Date("2025-04-25T00:00:00Z").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;
      const days = Math.max(Math.floor(timeLeft / (1000 * 60 * 60 * 24)), 0);
      setDaysLeft(days);
    };

    updateCountdown(); // Initial update
    const interval = setInterval(updateCountdown, 86400000); // Update every day

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const data = {
      companyName: formData.get("companyName") as string,
      contactPerson: formData.get("contactPerson") as string,
      designation: formData.get("designation") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      city: formData.get("city") as string,
      category: formData.get("category") as string,
    };

    try {
      const response = await fetch("/api/sreg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Redirect to Thank You page
        router.push("/thank-you");
      } else {
        const errorData = await response.json();
        if (errorData.message === "Email is already registered") {
          setError("This email is already registered. Please use a different email.");
        } else {
          throw new Error(errorData.message || "Registration failed");
        }
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-slate-100">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1E0A3C]">
            Exhibitor Registration
          </h1>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
            <span className="text-red-800 font-medium">{error}</span>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              placeholder="Enter company name"
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contactPerson" className="text-sm font-medium text-gray-700">
              Contact Person Name
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              required
              placeholder="Enter contact person name"
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="designation" className="text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              required
              placeholder="Enter designation"
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter phone number"
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter email ID"
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              placeholder="Enter city"
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Medical Equipment">Medical Equipment</option>
              <option value="Service Category">Service Category</option>
            </select>
          </div>

          {/* Register Now Button */}
          <button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-[#D1410C] hover:bg-[#B23709] text-white transition-colors duration-300"
          >
            Register Now
          </button>

          {/* Countdown Timer - Mobile View Only */}
          {daysLeft !== null && (
            <div className="mt-4 text-center text-gray-800 text-lg font-semibold md:hidden">
              📅 {daysLeft} Days Left Until the Event
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
