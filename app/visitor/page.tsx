'use client'

import Image from 'next/image'
import RegistrationForm from "@/app/components/ui/RegistrationForm"
import ExhibitionDetails from "@/app/components/ExhibitionDetails"
import bgImage from "@/app/images/bg.jpg"
import logo from "@/app/images/white logo.png"

export default function Visitor() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0">
        <Image
          src={bgImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
  {/* Left Column - Header */}
  <header className="relative flex flex-col items-center lg:items-start">
    <Image
      src={logo}
      alt="Logo"
      width={500}
      height={50}
      className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto"
      priority
    />
    <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
      DUBAI
    </p>
    <p className="text-yellow-500 text-xl sm:text-2xl md:text-3xl font-semibold pb-4">
      7th and 8th of December
    </p>
    <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
      CROWNE PLAZA
    </p>
    <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
      Salah AI Din St - Deira
    </p>
  </header>

  {/* Right Column - Main Content */}
  <main className="flex justify-start lg:justify-start lg:pl-8">
    <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl mt-4 lg:mt-16">
      <div className="relative p-6 sm:p-8 rounded-lg shadow-2xl bg-white">
        <RegistrationForm />
      </div>
    </div>
  </main>
</div>


      {/* Exhibition Details */}
      <footer className="relative z-10 mt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <ExhibitionDetails />
      </footer>
    </div>
  )
}