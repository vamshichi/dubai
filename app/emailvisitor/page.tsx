'use client'

import Image from 'next/image'
import RegistrationForm from "@/app/components/emailreg"
import ExhibitionDetails from "@/app/components/ExhibitionDetails"
import bgImage from "@/app/images/bg.jpg"
import logo from "@/app/images/white logo.png"
// import FacebookAds from '../components/FacebookAds'
// import GoogleAnalytics from '../components/Gads'
// import IpsGoogleAnalytics from '../components/ipsgaads'


export default function Visitor() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
       {/* <FacebookAds />
       <GoogleAnalytics />
       <IpsGoogleAnalytics /> */}
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
    BAHRAIN
    </p>
    <p className="text-yellow-500 text-xl sm:text-2xl md:text-3xl font-semibold pb-4">
    21st and 22nd of February
    </p>
    <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
    King Faisal Road
    </p>
    <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
    Manama
    </p>
  </header>

  {/* Right Column - Main Content */}
  <main className="flex justify-start lg:justify-end lg:mr-8">
    <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl mt-4 lg:mt-16">
      <div className="relative p-6 sm:p-8 rounded-lg  ">
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