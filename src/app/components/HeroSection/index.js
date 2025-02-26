import Image from "next/image";
import Button from "../sharedUI/Button";
import { HeroImage } from "@/app/utils/constants";

const HeroSection = () => {
  return (
    <section className="bg-red-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="text-red-600">Dev</span>
            <span className="text-yellow-400">Connect</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mt-4">
            A Place Where You Can Connect With Like-Minded People.
          </h2>

          <div className="mt-6">
            <Button name="Get Started" />
          </div>
        </div>

        {/* Right Content*/}
        <div className="transition-transform duration-300 hover:scale-105">
          <Image
            src={HeroImage}
            alt="Hero Image"
            height={500}
            width={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
