"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  FaReact, FaNodeJs, FaDatabase, FaTools, FaHtml5,
  FaCss3Alt, FaJs, FaTrello, FaJira, FaBitbucket, FaDocker, FaGithub
} from "react-icons/fa";
import {
  SiNextdotjs, SiExpress, SiPostgresql, SiVercel,
  SiNetlify, SiMongodb, SiNotion, SiPgadmin, SiTailwindcss,
  SiTypescript, SiMysql, SiStrapi, SiPostman, SiFigma
} from "react-icons/si";
import img1 from "../public/images/survey.png";
import img2 from "../public/images/p2.jpg";
import img3 from "../public/images/selling.png";
import img4 from "../public/images/ksh.jpg";
import img5 from "../public/images/weather.png";
import img6 from "../public/images/cal.png";



const projects = [
  {
    id: 1,
    image: img1,
    title: "Survey and Dashboard",
    description: "A student-friendly platform for creating surveys, collecting responses, and analyzing data through interactive dashboards.",
    technologies: "HTML, CSS, JavaScript, Github, Vercel",
    github: "https://github.com/sengkimin/Survey-and-Dashboard.git",
    liveDemo: "https://survey-and-dashboard.vercel.app/",
    showGitHub: true,
    showLiveDemo: true,  },
  {
    id: 2,
    image: img4,
    title: "KSH System",
    description: "A System use to manage the students activity in Kampuchea Sela Handicap (NGO), that help the staff easily to access all the information about students and follow up their progress.",
    technologies: "React.js, Tailwind CSS, Strapi, Github, Netlify",
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://yourportfolio.live",
  },
  {
    id: 3,
    image: img2,
    title: "Minimal Blog",
    description:
      "A platform for user can create blog by themselve, and it easily for the user to know about new news around the world quickly.",
    technologies: "Html, Css, JavaScript, Github, Vercel",
    github: "https://github.com/yourusername/ecommerce",
    liveDemo: "https://minimal-blog-beryl.vercel.app/",
    showGitHub: false,
    showLiveDemo: true,
  },
  {
    id: 4,
    image: img3,
    title: "Selling Bycircle",
    description: "A website selling bicycles that helps users easily buy and see all branches. It also offers discounts, providing high quality at a good price.",
    technologies: "Html, Css, JavaScript, Github, Vercel",
    liveDemo: "https://selling-bicycle.vercel.app/",
    showLiveDemo: true, 

  },
  {
    id: 5,
    image: img6,
    title: "Calculator",
    description: "A simple and user-friendly calculator that helps users perform quick and accurate calculations.",
    technologies: "HTML, CSS, JavaScript, GitHub, Vercel",
    features: "Basic arithmetic operations, responsive design, and a clean UI for easy use.",
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://hack-attackers.vercel.app/",
    showLiveDemo: true,
  },
  {
    id: 6,
    image: img5,
    title: "PP Weather",
    description: "A weather website that displays the current day's weather and a 3-day forecast.",
    technologies: "React, Tailwind CSS, REST API, GitHub, Vercel",
    features: "Real-time weather updates, a 3-day forecast, and a responsive design.",
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://pp-weather-azure.vercel.app/pages/home/index.html",
    showLiveDemo: true,
  }
];

const skills = [
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-400 text-5xl" /> },
  { name: "CSS", level: 95, icon: <FaCss3Alt className="text-blue-400 text-5xl" /> },
  { name: "JavaScript", level: 90, icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-400 text-5xl" /> },
  { name: "React", level: 90, icon: <FaReact className="text-teal-400 text-5xl" /> },
  { name: "Next.js", level: 90, icon: <SiNextdotjs className="text-black-400 text-5xl" /> },
  { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-400 text-5xl" /> },
  { name: "Express", level: 85, icon: <SiExpress className="text-black-400 text-5xl" /> },
  { name: "PostgreSQL & pgAdmin4", level: 80, icon: <SiPostgresql className="text-blue-400 text-5xl" /> },
  { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-300 text-5xl" /> },
  { name: "MySQL", level: 80, icon: <SiMysql className="text-blue-500 text-5xl" /> },
  { name: "Strapi", level: 75, icon: <SiStrapi className="text-purple-400 text-5xl" /> },
  { name: "Tailwind CSS & Bootstrap", level: 85, icon: <SiTailwindcss className="text-blue-400 text-5xl" /> },
  { name: "GitHub", level: 80, icon: <FaGithub className="text-gray-400 text-5xl" /> },
  { name: "Docker", level: 80, icon: <FaDocker className="text-blue-400 text-5xl" /> },
  { name: "Vercel", level: 75, icon: <SiVercel className="text-white text-5xl" /> },
  { name: "Netlify", level: 75, icon: <SiNetlify className="text-white text-5xl" /> },
  { name: "Bitbucket", level: 70, icon: <FaBitbucket className="text-blue-500 text-5xl" /> },
  { name: "Trello", level: 70, icon: <FaTrello className="text-blue-400 text-5xl" /> },
  { name: "Jira", level: 70, icon: <FaJira className="text-blue-400 text-5xl" /> },
  { name: "Notion", level: 65, icon: <SiNotion className="text-white text-5xl" /> },
  { name: "Postman", level: 75, icon: <SiPostman className="text-orange-400 text-5xl" /> },
  { name: "Figma", level: 75, icon: <SiFigma className="text-purple-400 text-5xl" /> },
  { name: "Git, VS Code", level: 75, icon: <FaTools className="text-yellow-400 text-5xl" /> },
];


export default function ProjectsSection() {
  const [activeSection, setActiveSection] = useState("project");
  const sliderRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 20; 
    const step = 1;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (sliderRef.current) {
          if (
            sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
            sliderRef.current.scrollWidth
          ) {
            sliderRef.current.scrollTo({ left: 0, behavior: "auto" }); 
          } else {
            sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
          }
        }
      }, scrollSpeed);
    };

    startScrolling();
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="project" className="bg-black py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className=" text-3xl lg:text-5xl font-bold mb-6">
          <span className="text-teal-400">MY</span> PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 mt-16">
          <button
            className={`w-full py-3 shadow-md rounded-lg transition ${activeSection === "project" ? "bg-teal-500 shadow-teal-400" : "bg-gray-900 hover:bg-gray-600"
              }`}
            onClick={() => setActiveSection("project")}
          >
            Project
          </button>

          <button
            className={`w-full py-3 shadow-md rounded-lg transition ${activeSection === "skill" ? "bg-teal-500 shadow-teal-400" : "bg-gray-900 hover:bg-gray-600"
              }`}
            onClick={() => setActiveSection("skill")}
          >
            Skill
          </button>
          </div>

{activeSection === "project" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
    {projects.map((project) => (
      <div
        key={project.id}
        className="p-6 rounded-xl bg-gray-900 shadow-lg border border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-teal-400"
      >
        <div className="w-full h-64 relative rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.description}</p>
        <p className="text-teal-400 font-semibold mt-2">{project.technologies}</p>
        <div className="flex justify-center gap-4 mt-4">
          {project.showGitHub && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-teal-500 transition"
            >
              GitHub
            </a>
          )}
          {project.showLiveDemo && project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
)}

        {activeSection === "skill" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-md shadow-teal-400 hover:bg-gray-700 flex flex-col items-center text-center transition duration-300 group"
              >
                <div className="relative flex items-center justify-center mb-4">
                  <div className="absolute w-16 h-16 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition duration-300"></div>

                  <div className="relative z-10 text-4xl">{skill.icon}</div>
                </div>

                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>




        )}
      </div>

    </section>
  );
}






