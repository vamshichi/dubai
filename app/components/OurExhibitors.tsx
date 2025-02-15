import Image from "next/image";
import img1 from '@/app/images/exhibitors/Artboard 1.jpg'
import img2 from '@/app/images/exhibitors/Artboard 2.jpg'
import img3 from '@/app/images/exhibitors/Artboard 3.jpg'
import img4 from '@/app/images/exhibitors/Artboard 4.jpg'
import img5 from '@/app/images/exhibitors/Artboard 5.jpg'
import img6 from '@/app/images/exhibitors/Artboard 6.jpg'
import img7 from '@/app/images/exhibitors/Artboard 7.jpg'
import img8 from '@/app/images/exhibitors/Artboard 8.jpg'
import img9 from '@/app/images/exhibitors/Artboard 9.jpg'

const exhibitors = [
  { name: "Company A", logo: img1 },
  { name: "Company B", logo: img2 },
  { name: "Company C", logo: img3 },
  { name: "Company D", logo: img4 },
  { name: "Company D", logo: img5 },
  { name: "Company D", logo: img6 },
  { name: "Company D", logo: img7 },
  { name: "Company D", logo: img8 },
  { name: "Company D", logo: img9 },
];

const OurExhibitors = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-7">Our Exhibitors</h2>
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-9 gap-4">
          {exhibitors.map((exhibitor, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={exhibitor.logo}
                alt={exhibitor.name}
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExhibitors;
