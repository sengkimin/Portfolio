import { FileText, Code } from "lucide-react"; 
import Image from "next/image";
import img from "../public/images/new3.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-10">
      {/* Section Title */}
      <div className="flex items-center justify-center mt-10">
        <h2 className=" text-3xl lg:text-5xl font-bold text-center leading-tight">
          ABOUT <span className="text-teal-400">ME!</span>
        </h2>
      </div>

      {/* Content Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-20 py-16">
        
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mb-16 mt-8 lg:mb-0">
          <div className="relative w-[350px] h-[450px] sm:w-[450px] sm:h-[550px] lg:w-[500px] lg:h-[650px]">
            <Image
              src={img}
              alt="Creative Designer"
              className="rounded-2xl shadow-md shadow-teal-400 transition-transform duration-500 hover:scale-110 cursor-pointer"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold">
            <span className="text-teal-400">I'm</span> SENG IN
          </h2>
          <p className="mt-6 text-gray-400 text-lg sm:text-xl leading-relaxed">
            I am a second-year student at PSE Institute, specializing in Web and Mobile App Development. I focus on creating user-friendly web applications using React, Next.js, Tailwind CSS, HTML, and CSS.
          </p>
          <p className="mt-4 text-gray-400 text-lg sm:text-xl leading-relaxed">
            I am excited to apply my knowledge and improve my skills by working with experienced developers. I love problem-solving and working in a team environment.
          </p>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full mt-6">
          <a href="https://documentcloud.adobe.com/gsuiteintegration/index.html?state=%7B%22ids%22%3A%5B%221qWWa4xaJ84ducW1IfHxqCexwb0EqMf36%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22109743866894897380659%22%2C%22resourceKeys%22%3A%7B%7D%7D" download  className="w-full lg:w-auto">
  <button 
    data-aos="fade-up"
    data-aos-duration="800"
    className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#414299] to-[#289c94] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl"
  >
    <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
  </button>
</a>

          </div>
        </div>
      </div>
    </section>
  );
}
