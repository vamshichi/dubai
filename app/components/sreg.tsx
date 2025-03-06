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
      companyName: formData.get("companyName") as string,
      contactPerson: formData.get("contactPerson") as string,
      designation: formData.get("designation") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      city: formData.get("city") as string,
      category: formData.get("category") as string,
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
    <div className="w-full mx-auto p-16 bg-slate-100">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1E0A3C]">Exhibitor Registration</h1>
        </div>

        {success && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
            <span className="text-green-800 font-medium">{success}</span>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
            <span className="text-red-800 font-medium">{error}</span>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" id="companyName" name="companyName" required placeholder="Enter company name" className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent" />
          </div>

          <div className="space-y-2">
            <label htmlFor="contactPerson" className="text-sm font-medium text-gray-700">Contact Person Name</label>
            <input type="text" id="contactPerson" name="contactPerson" required placeholder="Enter contact person name" className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent" />
          </div>

          <div className="space-y-2">
            <label htmlFor="designation" className="text-sm font-medium text-gray-700">Designation</label>
            <input type="text" id="designation" name="designation" required placeholder="Enter designation" className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent" />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" required placeholder="Enter phone number" className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email ID</label>
            <input type="email" id="email" name="email" required placeholder="Enter email ID" className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent" />
          </div>

          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
            <input type="text" id="city" name="city" required placeholder="Enter city" className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent" />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
            <select id="category" name="category" required className="w-full h-12 px-3 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D1410C] focus:border-transparent">
              <option value="" disabled>Select category</option>
              <option value="Medical Equipment">Medical Equipment</option>
              <option value="Service Category">Service Category</option>
            </select>
          </div>

          <button type="submit" className="w-full h-12 text-base font-semibold bg-[#D1410C] hover:bg-[#B23709] text-white transition-colors duration-300">Register Now</button>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
