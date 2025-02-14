'use client';

import React, { useState, useRef } from "react";

const RegistrationForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      preferredCity: formData.get("preferredCity") as string,
      preferredBudget: formData.get("preferredBudget") as string,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess("Thank you for registering! We will contact you soon.");
        if (formRef.current) {
          formRef.current.reset();
        }
        setTimeout(() => {
          setSuccess(null);
        }, 5000);
      } else {
        const errorData = await response.json();
        if (errorData.message === "Email is already registered") {
          setError("This email is already registered. Please use a different email.");
        } else {
          throw new Error(errorData.message || 'Registration failed');
        }
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">Visitor Registration</h1>

        {success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">{success}</span>
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
            <svg className="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"></path>
            </svg>
            <span className="font-medium">{error}</span>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded text-gray-700" required placeholder="Enter your name" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded text-gray-700" required placeholder="Enter your email" />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full p-2 border rounded text-gray-700" required placeholder="Enter your phone number" />
        </div>

        <div className="mb-4">
          <label htmlFor="preferredCity" className="block text-gray-700">Preferred City</label>
          <select id="preferredCity" name="preferredCity" className="w-full p-2 border rounded text-gray-700" required defaultValue="">
            <option value="" disabled>Select your City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Chennai">Chennai</option>
            <option value="Pune">Pune</option>
            <option value="Thane">Thane</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Goa">Goa</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Lucknow">Lucknow</option> 
            <option value="Mangalore">Mangalore</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Indore">Indore</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Nasik">Nasik</option>
            <option value="Aurangabad">Aurangabad</option>
            <option value="Other">Other</option>           
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="preferredBudget" className="block text-gray-700">Preferred Budget</label>
          <select id="preferredBudget" name="preferredBudget" className="w-full p-2 border rounded text-gray-700" required defaultValue="">
            <option value="" disabled>Select your budget</option>
            <option value="Under 1 Cr INR">Under 1 Cr INR</option>
            <option value="1 Cr - 2 Cr INR">1 Cr - 2 Cr INR</option>
            <option value="2 Cr - 5 Cr INR">2 Cr - 5 Cr INR</option>
            <option value="Above 5 Cr">Above 5 Cr</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;