"use client"

import type React from "react"
import { useState, useRef } from "react"

const RegistrationForm = () => {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      preferredCity: formData.get("preferredCity") as string,
      preferredBudget: formData.get("preferredBudget") as string,
    }

    try {
      const response = await fetch("/api/sreg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSuccess("Thank you for registering! We will contact you soon.")
        if (formRef.current) {
          formRef.current.reset()
        }
        setTimeout(() => {
          setSuccess(null)
        }, 5000)
      } else {
        const errorData = await response.json()
        if (errorData.message === "Email is already registered") {
          setError("This email is already registered. Please use a different email.")
        } else {
          throw new Error(errorData.message || "Registration failed")
        }
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred")
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
  }

  return (
    <div className="w-full  mx-auto p-16 bg-slate-100">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1E0A3C]">Free Visitor Registration</h1>
        </div>

        {success && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-green-800 font-medium">{success}</span>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <span className="text-red-800 font-medium">{error}</span>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="preferredCity" className="text-sm font-medium text-gray-700">
              Preferred City
            </label>
            <select
              id="preferredCity"
              name="preferredCity"
              required
              defaultValue=""
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            >
              <option value="" disabled>
                Select your City
              </option>
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

          <div className="space-y-2">
            <label htmlFor="preferredBudget" className="text-sm font-medium text-gray-700">
              Preferred Budget
            </label>
            <select
              id="preferredBudget"
              name="preferredBudget"
              required
              defaultValue=""
              className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent"
            >
              <option value="" disabled>
                Select your budget
              </option>
              <option value="Under 1 Cr INR">Under 1 Cr INR</option>
              <option value="1 Cr - 2 Cr INR">1 Cr - 2 Cr INR</option>
              <option value="2 Cr - 5 Cr INR">2 Cr - 5 Cr INR</option>
              <option value="Above 5 Cr">Above 5 Cr</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-[#D1410C] hover:bg-[#B23709] text-white transition-colors duration-300"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm

