'use client'
import Image from 'next/image';
import Hands from "@/app/images/hand-shake.png";
import Key from "@/app/images/key.png";
import Sales from "@/app/images/sales.png";
import Developer from "@/app/images/consulting.png";
import Feald from "@/app/images/field.png";
import Realestate from "@/app/images/real-estate.png";
import bg1 from '@/app/images/1x.jpg'

export default function ExhibitionDetails() {
  const details = [
    {
      icon: Hands,
      title: "Exclusive Real Estate Deals",
      description: "Get insider access to top-notch real estate deals from well-known Indian developers. Enjoy exclusive pre-launch prices and on-the-spot booking discounts.",
      bgImage: bg1, // Replace with your image paths
    },
    {
      icon: Key,
      title: "Brokerage-Free Bliss",
      description: "Embark on your property journey with peace of mind, knowing our exhibition offers zero brokerage, ensuring transparent transactions for every visitor.",
      bgImage: "/path/to/background-image-2.jpg", // Replace with your image paths
    },
    {
      icon: Sales,
      title: "Instant Booking Bonuses",
      description: "Unlock exclusive savings with on-the-spot booking discounts, making your dream property more accessible and affordable than ever before.",
      bgImage: "/path/to/background-image-3.jpg", // Replace with your image paths
    },
    {
      icon: Developer,
      title: "Developer Excellence Showcase",
      description: "Connect with esteemed developers renowned for their excellence and reliability.",
      bgImage: "/path/to/background-image-4.jpg", // Replace with your image paths
    },
    {
      icon: Feald,
      title: "Pre Launch Properties",
      description: "Discover exclusive, premier property launches offering prime investment and homeownership opportunities.",
      bgImage: "/path/to/background-image-5.jpg", // Replace with your image paths
    },
    {
      icon: Realestate,
      title: "Property Exchange",
      description: "Upgrade seamlessly by exchanging your old properties at our exhibition, ensuring a smooth transition to your new dream home.",
      bgImage: "/path/to/background-image-6.jpg", // Replace with your image paths
    }
  ];

  return (
    <section className="py-16 px-8 bg-white text-center">
      <h2 className="text-3xl text-black font-bold mb-4">About The Exhibition!</h2>
      <p className="text-gray-600 mb-10">
        Discover a vast array of options with over 5000 properties, spanning across 50+ cities in India.
        Connect with 50+ reputable builders and let us guide you in transforming your property aspirations into reality.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {details.map((item, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg shadow-md text-center"
            style={{ backgroundImage: `url(${item.bgImage})` }}
          >
            <div className="flex justify-center items-center mb-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
