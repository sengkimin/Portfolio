"use client";
import { useState } from "react";
import Image from "next/image";
import img from "../public/images/com-removebg-preview.png";
import "animate.css";
import { Link } from "react-scroll";

export default function HeroSection() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-950 text-white items-center rounded-ee-full shadow-md shadow-teal-400">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full shadow-sm bg-gray-950 z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
          <div className="text-teal-400 font-bold text-3xl">
            <span className="text-white text-4xl">SENG </span> IN
          </div>

          {/* Navigation Links - Desktop */}
          <ul className="hidden lg:flex space-x-8 text-md uppercase">
            {["home", "about", "education", "project", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className={`cursor-pointer hover:text-teal-400 transition ${active === item ? "text-teal-400 font-semibold" : ""
                  }`}
                onClick={() => setActive(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden text-gray-300 text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900 text-center py-4 absolute w-full">
            <ul className="flex flex-col space-y-4">
              {["home", "about", "education", "project", "contact"].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer hover:text-teal-400 ${active === item ? "text-teal-400 font-semibold" : "text-white"
                    }`}
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="px-6 lg:px-32">
        <section id="home" className="relative py-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between md:mt-20">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-teal-400 text-sm font-semibold tracking-widest mb-4 mt-14 lg:mt-10 animate__animated animate__fadeIn animate__infinite animate__delay-1s">
                CREATIVE DEVELOPER
              </h2>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight animated-text">
                <span className="text-teal-400">WELCOME</span> TO MY PORTFOLIO
              </h1>
              <p className="mt-3 text-gray-400 text-base lg:text-lg leading-relaxed">
                Hi, I’m SENG IN, a passionate Web & Mobile App Developer eager to learn and contribute to real-world projects.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap justify-center space-x-4 sm:justify-start">
                <Link
                  to="project"
                  smooth={true}
                  duration={500}
                  className="group relative w-[160px] cursor-pointer"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3a3b98] to-[#2d8885] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                  <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                    <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                    <span className="absolute inset-0 flex items-center justify-center gap-2 text-md group-hover:gap-3 transition-all duration-300">
                      <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                        Project
                      </span>
                      <span className="w-4 h-4 text-gray-200 group-hover:rotate-45 transform transition-all duration-300 z-10">➜</span>
                    </span>
                  </div>
                </Link>

                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="group relative w-[160px] cursor-pointer"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3a3c98] to-[#2d8885] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                  <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                    <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                    <span className="absolute inset-0 flex items-center justify-center gap-2 text-md group-hover:gap-3 transition-all duration-300">
                      <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                        Contact
                      </span>
                      <span className="w-4 h-4 text-gray-200 group-hover:translate-x-1 transform transition-all duration-300 z-10">📩</span>
                    </span>
                  </div>
                </Link>

              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
              <div className="relative w-[350px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[500px] lg:h-[650px]">
                <Image
                  src={img}
                  alt="Creative Designer"
                  className="rounded-2xl  shadow-md  transform transition-transform duration-700 hover:scale-110 cursor-pointer"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>

  );
}
