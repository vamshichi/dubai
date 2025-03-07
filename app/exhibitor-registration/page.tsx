"use client";

import RegistrationForm from "@/app/components/sreg";
// import GoogleAnalytics from "../components/stoyangas";
import Image from "next/image";
// import mainImage from "@/app/images/WEB.png";
import mainImage from "@/app/images/reg from image-01.jpg";
// Import your background image (ensure you have this asset)
import bgImage from "@/app/images/1x.jpg";
import FacebookPixel from "../components/FacebookPixel";

export default function VisitorPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image.. */}
      <Image
        src={bgImage}
        alt="Page background"
        fill
        className="absolute inset-0 object-cover z-0 bg-black opacity-80"
      />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10">
        {/* <GoogleAnalytics /> */}
        <FacebookPixel />
        <main className="min-h-screen flex items-center justify-center p-6">
          <section className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl">
            <div className="flex items-center justify-center">
              <RegistrationForm />
            </div>
            <div className="relative">
              <Image 
                src={mainImage} 
                alt="Engaging background visual" 
                fill
                className="shadow-md"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
