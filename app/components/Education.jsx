// import React from "react";

// const EducationTimeline = () => {
//   const timeline = [
//     {
//       year: "2024-2025",
//       title: "Frontend Development",
//       description:
//         "In 2024, I started learning frontend development, creating various websites using HTML, CSS, Bootstrap, JavaScript, and React.js. I also gained experience designing website mockups in Figma.",
//     },
//     {
//       year: "2025",
//       title: "Backend Development",
//       description:
//         "In 2025, I began learning backend development, understanding how relational databases work and how to create REST APIs to retrieve and manage data from a server.",
//     },
//     {
//       year: "2025",
//       title: "Full-Stack Developer",
//       description:
//         "By 2025, I started working as a full-stack developer, building both frontend and backend systems. I also improved my teamwork skills, managed tasks efficiently, and worked independently based on given project requirements.",
//     },
//     {
//       year: "2023-2024",
//       title: "School Projects",
//       description:
//         "During school, I worked on projects in a team environment, similar to a real company. I gathered user requirements, designed backend structures, created website mockups, managed tasks, built API endpoints, and developed static websites.",
//     },
//     {
//       year: "2024",
//       title: "Internship",
//       description:
//         "In September 2024, I completed a one-month internship at Kampuchea Sela Handicap (KSH), an NGO. I worked as a full-stack developer on the KSH System, which helps manage students efficiently. I continue improving the system today.",
//     },
//   ];

//   return (
//     <section id="education" className="flex flex-col items-center bg-black text-white min-h-screen py-16">
//       <h1 className="text-3xl lg:text-5xl font-bold text-center mb-6">
//         EDUCATION & <span className="text-teal-400">EXPERIENCE</span>
//       </h1>

//       <div className="relative w-full max-w-5xl px-4">
//         {/* Vertical Line */}
//         <div className="absolute left-1/2 w-1 bg-teal-400 h-full transform -translate-x-1/2 hidden sm:block"></div>

//         {timeline.map((item, index) => (
//           <div key={index} className={`relative flex flex-col sm:flex-row items-center sm:items-start sm:${index % 2 === 0 ? "justify-start" : "justify-end"} w-full my-12`}>
            
//             {/* Timeline Box */}
//             <div className="relative flex flex-col items-center sm:items-start hover:scale-105 transition-transform duration-300 w-full max-w-xs sm:max-w-sm ">
//               <span className="absolute -top-8 text-lg sm:text-xl font-semibold text-teal-400">{item.year}</span>
//               <div className="bg-gray-900 border border-teal-400 text-white p-6 sm:p-8  shadow-lg shadow-teal-500 w-full">
//                 <h3 className="text-xl sm:text-2xl font-bold mb-4">{item.title}</h3>
//                 <p className="text-sm sm:text-lg">{item.description}</p>
//               </div>
//             </div>

//             {/* Dots */}
//             <div className="absolute left-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-teal-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-teal-500"></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EducationTimeline;
import React from "react";

const EducationTimeline = () => {
  const timeline = [
    {
      year: "2024-2025",
      title: "Frontend Development",
      description:
        "In 2024, I started learning frontend development, creating various websites using HTML, CSS, Bootstrap, JavaScript, and React.js. I also gained experience designing website mockups in Figma.",
    },
    {
      year: "2025",
      title: "Backend Development",
      description:
        "In 2025, I began learning backend development, understanding how relational databases work and how to create REST APIs to retrieve and manage data from a server.",
    },
    {
      year: "2025",
      title: "Full-Stack Developer",
      description:
        "By 2025, I started working as a full-stack developer, building both frontend and backend systems. I also improved my teamwork skills, managed tasks efficiently, and worked independently based on given project requirements.",
    },
    {
      year: "2024-2025",
      title: "School Projects",
      description:
        "During school, I worked on projects in a team environment, similar to a real company. I gathered user requirements, designed backend structures, created website mockups, managed tasks, built API endpoints, and developed static websites.",
    },
    {
      year: "2024",
      title: "Internship",
      description:
        "In September 2024, I completed a one-month internship at Kampuchea Sela Handicap (KSH), an NGO. I worked as a full-stack developer on the KSH System, which helps manage students efficiently. I continue improving the system today.",
    },
  ];

  return (
    <section id="education" className="flex flex-col items-center bg-black text-white min-h-screen py-16">
      <h1 className="text-3xl lg:text-5xl font-bold text-center mb-16">
        EDUCATION & <span className="text-teal-400">EXPERIENCE</span>
      </h1>

      <div className="relative w-full max-w-5xl px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 w-1 bg-teal-400 h-full transform -translate-x-1/2 hidden sm:block"></div>

        {timeline.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col sm:flex-row w-full my-12 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Dots */}
            <div className="absolute left-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-teal-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-teal-500"></div>

            {/* Timeline Box */}
            <div className="relative w-full sm:w-1/2 p-6 sm:p-10">
              <span className="absolute -top-8 text-lg sm:text-xl font-semibold text-teal-400">
                {item.year}
              </span>
              <div className="bg-gray-900 border rounded-lg border-teal-400 text-white p-6 sm:p-8 shadow-lg shadow-teal-500 duration-700 hover:scale-110 cursor-pointer">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm sm:text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
